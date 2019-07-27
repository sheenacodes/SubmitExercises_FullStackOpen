
import React from 'react'

const Country = ({ country, onClickShow }) => {
    return (
      <li>{country.name}
      <button onClick={onClickShow}>show</button>
      </li>
    )
  }
  
  export default Country