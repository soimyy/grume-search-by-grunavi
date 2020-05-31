import React from 'react'

const input = (props) => {
    return (
        <div>
            <p>{props.children}</p>
            <p>{props.word}</p>
            <input onChange={props.changed}/>
        </div>
    )
}

export default input
