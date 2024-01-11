import { useReducer, useState } from 'react'
import './App.css'
import { ActionTypes, TAction } from './types.app'
import TodoProvider from './context/TodoProvider'
import TodoApp from './components/TodoApp'




function App() {


  return (
    <>
      {/* <CounterWithFunc  state={state} dispatch={dispatch} /> */}
      <TodoProvider>
        <TodoApp></TodoApp>
      </TodoProvider>
    </>
  )
}

export default App
