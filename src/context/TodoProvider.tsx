import React, { createContext, useReducer } from 'react'

type TTodo = {
    id: string,
    title: string,
    isCompleted: boolean
}
type TAction ={
    type: string,
    payload: TTodo | string
}

type TodoProviderProps = {
    children: React.ReactNode
}
export const TodoContext = createContext(undefined)
const initialState:TTodo[] = []
const reducer = (currentState :TTodo[], action:TAction)=>{
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload]
        case "taskComplete":
            return currentState.map(todo =>todo.id ===action.payload?{...todo, isCompleted: !todo.isCompleted}: todo)
        default:
            currentState;
    }
}
const TodoProvider = ({children}:TodoProviderProps) => {
const [state, dispatch] = useReducer(reducer, initialState)



    const values = {
        state,
        dispatch
    }
    console.log(state)
  return (
    <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider