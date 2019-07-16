
import React from 'react'
import Person from './Person'

const Persons = ({ phonebook }) => {

    const phonenumbers = () => 
    phonebook.map((person) => 
    {
        return <Person key={person.name} contact={person} />
    })
    return (
        <div>
            {phonenumbers()}
        </div>
      
    )
  }
  
  export default Persons