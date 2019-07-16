
import React from 'react'

const Person = ({ contact }) => {
    return (
      <li>{contact.name} {contact.number}</li>
    )
  }
  
  export default Person