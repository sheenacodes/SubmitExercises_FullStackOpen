import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [personsFiltered, SetPersonsFiltered] = useState([])
  const [notifyMessage, setNotifyMessage] = useState({ msg: null, status: true })

  const setTimedNotification = (message, status) => {
    setNotifyMessage({ msg: message, status: status })
    setTimeout(() => {
      setNotifyMessage({ msg: null, status: true })
    }, 5000)
  }

  useEffect(() => {

    personsService
      .getAll()
      .then(data => {
        setPersons(data)
      })
      .catch(err =>
        setTimedNotification(`connection errror`, false)
      )

  }, [])

  const personsToShow = showAll ? persons : personsFiltered

  const deletePerson = (id) => {

    const person = persons.find(n => n.id === id)
    var alerttext = `delete ${person.name}`
    let dodelete = window.confirm(alerttext)

    if (dodelete) {
      personsService
        .deleteperson(id)
        .then(data => {
          setTimedNotification(`${person.name} deleted`,true)
          setPersons(persons.filter(person => person.id !== id))})
        .catch(err => {
          console.log(err)
          setPersons(persons.filter(person => person.id !== id))
          setTimedNotification(`${person.name} already removed from server`,false)
        })
    }
  }

  const isPersonDuplicate = (name) => {
    let person = persons.find(person => person.name === name)
    return person ? person.id : -1
  }

  const addPersonToPhonebook = (newName, newNumber) => {

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
            setPersons(persons.map(person =>
              person.name === newName ? returnedObject : person)))
          .catch(err => {
            setPersons(persons.filter(person => person.id !== existing_id))
            setTimedNotification(`${newName} already removed from server`,
              false)})
      }
    }
    else {
      const newObject = { name: newName, number: newNumber }
      personsService
        .create(newObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setTimedNotification(`${newName} added`, true)})
    }
    setShowAll(true)
  }

  return (
    <div>
      <h1>Filter</h1>

      <Notification message={notifyMessage.msg}
        isSuccess={notifyMessage.status} />

      <Filter phonebook={persons}
        callbackSetState={SetPersonsFiltered}
        callbackShowAll={setShowAll} />

      <h2>Phonebook</h2>

      <NewPersonForm phonebook={persons}
        callBackAddPerson={addPersonToPhonebook} />

      <h2>Numbers</h2>

      <Persons phonebook={personsToShow}
        deletePerson={deletePerson} />
    </div>
  )
}

export default App                                           