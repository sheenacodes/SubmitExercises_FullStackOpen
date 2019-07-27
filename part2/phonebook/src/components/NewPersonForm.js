
import React, { useState } from 'react'

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
    callBackAddPerson(newName, newNumber)
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