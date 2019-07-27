import React from 'react'

const Notification = ( {message, isSuccess} ) => {

    const styleSuccess = {
        color: 'green',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const styleFailure = {
        color: 'red',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div style={isSuccess ? styleSuccess: styleFailure}>
            {message}
        </div>
    )
}

export default Notification
