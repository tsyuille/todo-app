import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    // value of the state and funtion that updates it
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    // function to set input to what user types in
    const handleChange = e => {
        setInput(e.target.value)
    }

    // function for submitting a new todo
    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            // creates an id for the todo list item
            id: Math.floor(Math.random() * 10000), 
            text: input
        })
        // resets input back to empty string after todo item has been submitted
        setInput('')
    }

  return (
    // form for adding/updating todo list items
    <form className= 'todoForm' onSubmit={handleSubmit}>
        {props.edit ? ( 
        <>
        <input 
        type='text' 
        placeholder='Update Todo' 
        value={input} 
        name='text' 
        className='todoInput edit'
        onChange={handleChange}
        ref={inputFocus}
        />
        <button className='todoButton edit'>Update</button>
        </>) :
        ( 
        <>
        <input 
            type='text' 
            placeholder='Add a todo' 
            value={input} 
            name='text' 
            className='todoInput'
            onChange={handleChange}
            ref={inputFocus}
            />
            <button className='todoButton'>Add todo</button>
            </>)}
       
    </form>
  )
}

export default TodoForm