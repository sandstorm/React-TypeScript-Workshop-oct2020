import React from 'react'
import {Person} from './Domain/Person'

const list: Array<Person> = [
    {name : 'Finn'},
    {name : 'Jake'},
    {name : 'Bubblegum'},
]

const renderPersons = (persons: Array<Person>) => {
    return persons.map(person => {
        return <li key={person.name}>{person.name}</li>
    })
}

const List = () => {
    return (
        <ul>
            {renderPersons(list)}
        </ul>
    )
}

export default List
