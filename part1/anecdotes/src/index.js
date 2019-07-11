import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const SubTitle = ({ text }) => (
    <p><b>{text}</b></p>
)

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const DisplayAnecdote = ({ anecdote, votecount }) =>
    (
        <div>
            <SubTitle text="Anecdote of the day" />
            <div>{anecdote}</div>
            <div>has {votecount} votes</div>
        </div>
    )

const DisplayPopular = ({ anecdotes, votes }) => {

    const sumvote = votes.reduce((a, b) => a + b, 0)
    if (sumvote === 0) {
        return (
            <div>
                No votes yet
            </div>
        )
    }
    
    let maxvotes = votes.indexOf(Math.max(...votes))
    return (
        <div>
            <SubTitle text="Anecdote with most votes" />
            <DisplayAnecdote anecdote={anecdotes[maxvotes]}
                votecount={votes[maxvotes]} />
        </div>
    )

}


const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(6).fill(0))

    const handleNext = () => {
        setSelected(Math.floor((Math.random() * 5)));
    }

    const handleVote = () => {
        const copyvotes = [...votes]
        copyvotes[selected] += 1;
        setVotes(copyvotes);
    }

    return (
        <div>

            <DisplayAnecdote anecdote={props.anecdotes[selected]}
                votecount={votes[selected]} />

            <Button onClick={handleNext}
                text='next anecdote' />

            <Button onClick={handleVote}
                text='Vote' />

            <DisplayPopular anecdotes={anecdotes} votes={votes} />

        </div>

    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)