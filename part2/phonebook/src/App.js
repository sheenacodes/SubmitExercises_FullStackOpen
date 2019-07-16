import React, { useState } from 'react'
import Persons from './components/Persons'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 12345678 },
      { name: 'Anya Hellas',
      number: 12345678 },
      { name: 'devansh Hellas',
      number: 12345678 },
      { name: 'dumdum Hellas',
      number: 12345678 }
  ]) 
  const [showAll, setShowAll] = useState(true)

 
  const [personsFiltered, SetPersonsFiltered] = useState([])

  const personsToShow = showAll
  ? persons
  : personsFiltered

  return (
    <div>
      <h1>Filter</h1>
      <Filter phonebook={persons} callbackSetState={SetPersonsFiltered} callbackShowAll={setShowAll}/>
      <h2>Phonebook</h2>
      <NewPersonForm phonebook={persons} callbackSetState={setPersons} callbackShowAll={setShowAll}/>
      
      <h2>Numbers</h2>
      <Persons phonebook={personsToShow}/>
    </div>
  )
}

export default App                                           