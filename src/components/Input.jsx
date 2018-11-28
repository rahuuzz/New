import React from 'react'

const Input = props => {

    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <input 
                name={props.name}
                id={props.name}
                ref={props.inpRef}
            />
        </div>
    )
}
export default Input