
import React, { useState } from 'react'
import personsService from '../services/persons'

const NewPersonForm = ({ phonebook, callBackAddPerson }) => {
  const [newName, setNewName] = useState('name')
  const [newNumber, setNewNumber] = useState('12345')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }



  const addToPhonebook = (event) => {
    event.preventDefault()
    callBackAddPerson(newName,newNumber)
    /*
    let existing_id = isPersonDuplicate(newName)
    console.log("existing_id" + existing_id)
    if (existing_id !== -1) {
      var alerttext = `${newName} already exists in the phonebook, do you want to upate`
      let doupdate = window.confirm(alerttext)
      if (doupdate) {
        const newObject = { name: newName, number: newNumber, id: existing_id }
        personsService
        .update(existing_id, newObject)
          .then(returnedObject =>
            callbackSetState(phonebook.map(person =>
              person.name === newName ? returnedObject : person
            )))
            .catch(err => 
              {
                callbackErr(`${newName} already deleted`)
              })
      }
    }
    else {
      const newObject = { name: newName, number: newNumber}
      personsService
        .create( newObject)
        .then(returnedObject => 
            callbackSetState(phonebook.concat(returnedObject)))       
    }
    callbackShowAll(true)*/
  }

  return (
    <div>
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    </div>

  )
}

export default NewPersonForm