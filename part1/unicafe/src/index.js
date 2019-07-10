import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text }) => (
    <div><p>{text}</p></div>
)
    
const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistic = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({ good, bad, neutral }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <div>
                no feedback given
            </div>
            )
    }

    let total = good + bad + neutral
    let average = ((good - bad) / total).toFixed(2)
    let positive = (good / total).toFixed(2)

    return (
        <table>
            <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='bad' value={bad} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='all' value={total} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
            </tbody>
        </table>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    return (
        <div>
            <Display text="give feedback" />

            <Button
                onClick={handleGoodClick}
                text='good'
            />
            <Button
                onClick={handleBadClick}
                text='bad'
            />
            <Button
                onClick={handleNeutralClick}
                text='neutral'
            />
            <Display text="Statistics" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)