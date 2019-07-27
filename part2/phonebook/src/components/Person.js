
import React from 'react'

const Person = ({ contact, onClickDelete }) => {
    return (
      
      <li>{contact.name} {contact.number}
      <button onClick={onClickDelete}>delete</button>
      </li>
      
    )
  }
  
  export default Person