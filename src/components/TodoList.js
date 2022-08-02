import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  // set state
    const [todos, setTodos] = useState([])

    // function to add todos 
    const addTodo = todo => {
        // todo will only appear if something is actually typed in
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        // sets todo as new todo
        setTodos(newTodos)
    }

    // function to remove todo 
    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr)
    }

    // function to update todo
    const updateTodo= (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    // function to mark todo as complete
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      // sets todo as updated todo
      setTodos(updatedTodos)
    }

      return (
        <div>
            <h1>Today's Plan</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updateTodo={updateTodo} />
        </div>
      )
}

export default TodoList