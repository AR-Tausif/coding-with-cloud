import React from 'react'
import TodoList from './TodoList'

const TodoLists = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline mt-10 text-center'>TodoLists</h1>

      <div className=''>
        <TodoList/>
      </div>
    </div>
  )
}

export default TodoLists