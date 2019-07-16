
import React, { useState }  from 'react'

const NewPersonForm = ({ phonebook, callbackSetState, callbackShowAll }) => {
    const [ newName, setNewName ] = useState('add new name')
    const [ newNumber, setNewNumber ] = useState('12345')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const isPersonDuplicate = (name) => {
        let filteredarray = phonebook.filter((person) => person.name === name)
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
        callbackSetState(phonebook.concat({name: newName, number: newNumber}))
        callbackShowAll(true)
        
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
  
  export default NewPersonForm