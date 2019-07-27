
import React from 'react'
import Person from './Person'

const Persons = ({ phonebook, deletePerson }) => {

    const phonenumbers = () =>
        phonebook.map((person) => {
            return <Person key={person.name} contact={person} onClickDelete={() => deletePerson(person.id)} />
        })
    return (
        <div>
            {phonenumbers()}
        </div>
    )
}

export default Persons