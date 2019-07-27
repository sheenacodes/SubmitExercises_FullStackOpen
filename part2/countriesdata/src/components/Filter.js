
import React, { useState } from 'react'

const Filter = ({ callbackFilter }) => {
  const [searchstring, setSearchstring] = useState("")

  const handleInputChange = (event) => {
    let newString = event.target.value
    setSearchstring(newString)
    callbackFilter(newString)
  }

  return (
    <div>
      filter countries: <input value={searchstring} onChange={handleInputChange}></input>
    </div>
  )
}

export default Filter