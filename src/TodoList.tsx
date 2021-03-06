import {set} from 'immutable'
import React, {useEffect, useState} from 'react'
import {Todo, todoApiEndpoint} from './Domain/Todo'
import './TodoList.scss'

const TodoList = () => {
    const [todoList, setTodoList] = useState<Array<Todo>>([])
    const [isCompletedFilterActive, setIsCompletedFilterActive] = useState(false)
    const [filterText, setFilterText] = useState('')

    const handleIsCompletedFilterActiveChange = () => {
        setIsCompletedFilterActive(!isCompletedFilterActive)
    }

    const handleFilterTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        setFilterText(event.target.value)
    }

    const handleTodoCompletedChange = (todo: Todo) => {
        const index = todoList.findIndex(item => item.id === todo.id)
        // use ImmutableJS `set()` to update todoList in a simple, immutable way
        setTodoList(set(todoList, index, {...todo, completed: !todo.completed}))
    }

    useEffect(() => {
        fetch(todoApiEndpoint)
            .then(response => response.json())
            // WHY: Cast json response to Array<Todo>
            // Here we should use JSON validation in production to ensure the data is correct
            .then((todos: Array<Todo>) => setTodoList(todos));
    }, []) // TODO: what happens when we do not specify the empty deps array - profiler

    // Filter TODOs by title
    const filteredTodos = filterText !== '' ? todoList.filter(todo => todo.title.includes(filterText)) : todoList

    // Filter TODOs by completed
    const todos = isCompletedFilterActive ? filteredTodos.filter(todo => !todo.completed) : filteredTodos

    return (
        <div className="todo-list__wrapper">
            <h2>TODOs</h2>

            <input id="filterCompleted" type="checkbox" checked={isCompletedFilterActive} onChange={handleIsCompletedFilterActiveChange} />
            <label htmlFor="filterCompleted">Filter Completed TODOs</label>
            <hr />
            <label htmlFor="filterTitle">Filter title: </label>
            <input id="filterTitle" type="text" value={filterText} onChange={handleFilterTextChange} />
            
            <ul className="todo-list">
                {todos.map(todo => (
                    <li className="todo-list-item" key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => {handleTodoCompletedChange(todo)}} />
                        <span className={`todo-list-item__text${todo.completed ? ' todo-list-item__text--completed' : ''}`}>{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
