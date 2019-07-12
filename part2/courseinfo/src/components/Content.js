import React from 'react'
import Part from './Part'

const Content = ({ course }) => {

    const partsinfo = () => course.parts.map( (info) =>
        <Part 
        name={info.name} 
        exercises={info.exercises} 
        key={info.id} 
        />
     )
     
  return (
      <div>
      {partsinfo()}
      </div>
  )
}

export default Content