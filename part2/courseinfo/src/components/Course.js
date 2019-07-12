import React from 'react'
import Content from './Content'
import Header from './Header'
import Sum from './Sum'

const Course = ({ course }) => {
  return (
      <div>
        <Header course={course.name}/>
        <Content course={course}/>
        <Sum course={course} />
      </div>
      
  )
}

export default Course