import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'

const TodoList = () => {
  const { state: todos, dispatch } = useContext(TodoContext)

  return (
    <div>
      {todos?.map((todo,) => (
        <p 
        key={todo.id} 
        className={`bg-gray-200 hover:bg-purple-500 p-3 ${todo.isCompleted && "line-through"}`} 
        onClick={()=>dispatch({type:"taskComplete", payload:todo.id})}>
          {todo?.title}
          </p>
        ))}
    </div>
  )
}

export default TodoList