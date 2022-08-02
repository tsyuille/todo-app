import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
      id: null, 
      value: ''
  })

  const submitUpdate = task => {
      updateTodo(edit.id, task)
      setEdit({
          id:null, 
          value: ''
      })
  }

  if(edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
      // checks to see if todo is complete or not, sets class based on if true or not
      // pass in todo text 
      // link icons to their respective functions
      <div className={todo.isComplete ? 'todoRow complete' : 'todoRow'} key={index}>
          <div key={todo.id}>
              {todo.text}
          </div>
          <div className='icons'>
            <AiOutlineEdit onClick={()=> setEdit({ id: todo.id, value: todo.text })} className='editIcon'/>
            <AiOutlineClose onClick={() => removeTodo(todo.id)} className='deleteIcon'/>
            <AiOutlineCheck onClick={() => completeTodo(todo.id)} className='updateIcon'/>
          </div>
      </div>
  ))
}

export default Todo