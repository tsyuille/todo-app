import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        })
        setInput('')
    }

  return (
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