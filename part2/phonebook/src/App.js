import React, { useState } from 'react'
import Persons from './components/Persons'
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 12345678 }
  ]) 
  const [ newName, setNewName ] = useState('add new name')
  const [ newNumber, setNewNumber ] = useState('12345')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isPersonDuplicate = (name) => {
    let filteredarray = persons.filter((person) => person.name === name)
    return filteredarray.length === 1
  }
  
  const addToPhonebook = (event) => {
    event.preventDefault()
    if (isPersonDuplicate(newName))
      {
        var alerttext = `${newName} already exists in the phonebook`
        window.alert(alerttext)
      }
    else
      setPersons(persons.concat({name: newName, number: newNumber}))
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addToPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange  }/>
          </div>
          <div> 
          number: <input value={newNumber} onChange={handleNumberChange  }/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons phonebook={persons}/>
    </div>
  )
}

export default App                                           