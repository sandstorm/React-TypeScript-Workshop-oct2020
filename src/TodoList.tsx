import React, {useEffect, useState} from 'react'
import {Todo, todoApiEndpoint} from './Domain/Todo'
import './TodoList.css'

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

            <input id="filterTitle" type="text" value={filterText} onChange={handleFilterTextChange} />
            <label htmlFor="filterTitle">Filter title</label>
            
            <ul className="todo-list__list">
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
}

export default TodoList