import React from 'react'
import Contact from './Contact'

const Persons = ({ persons }) => {
    return (
        <ul >
            {persons.map(person =>
                <Contact key={person.id} person={person} />
            )}
        </ul>
    )
}

export default Persons