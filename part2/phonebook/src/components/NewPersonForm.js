
import React from 'react'
import Person from './Person'

const NewPersonForm = ({ phonebook }) => {

    const phonenumbers = () => 
    phonebook.map((person) => 
    {
        return <Person key={person.name} contact={person} />
    })

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
        </div>
      
    )
  }
  
  export default Numbers