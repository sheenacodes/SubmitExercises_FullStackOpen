import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return ( <h1> {props.course} </h1> )
}

const Content = (props) => {
    return (props.parts.map(part =>
        <p> {part.name}  {part.exercises} </p>))
}

const Total = (props) => {
    return (
        <p>
            Number of exercises {props.parts[0].exercises +
                props.parts[1].exercises +
                props.parts[2].exercises}
        </p>)
}

const App = () => {
    // const-definitions
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts =
        [{ name: part1, exercises: exercises1 },
        { name: part2, exercises: exercises2 },
        { name: part3, exercises: exercises3 }]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
