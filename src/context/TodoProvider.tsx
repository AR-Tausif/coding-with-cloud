import React, { createContext, useReducer } from "react"

export const TodoContext = createContext(undefined)

type TTodoProps = {
    children: React.ReactNode
}


  const initialState = {
    name: "Todo",
  }

  const reducer = (state: typeof initialState, action)=>{
    switch (action.type) {
        case 'submit':
            
            return {...state, name: action.payload}
    
        default:
            return state
    }
  }
const TodoProvider = ({children}: TTodoProps)=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const todoValues = {
        count: 3
    }
    return (
        <TodoContext.Provider value={todoValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;