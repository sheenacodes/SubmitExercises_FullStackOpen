
import React, {useState} from 'react'

const Filter = ({phonebook, callbackSetState, callbackShowAll }) => {
    const [ searchstring, setSearchstring ] = useState('')

    const handleInputChange = (event) => {
      let newString = event.target.value
        setSearchstring(newString)
        let filteredarray = phonebook.filter((person) => 
           person.name.toLowerCase().includes(newString.toLowerCase())
        )
        callbackSetState(filteredarray)
        callbackShowAll(false)
      }
    
   
    return (
        <div>
            filter by name: <input value={searchstring} onChange={handleInputChange}></input>
        </div>
    )
  }
  
  export default Filter