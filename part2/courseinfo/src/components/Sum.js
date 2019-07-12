import React from 'react'

const Sum = ({ course }) => {
    const total = () => course.parts.reduce((a, item) => a + item.exercises, 0)
  return (
    <p><b>total of {total()} courses </b></p>
  )
}

export default Sum