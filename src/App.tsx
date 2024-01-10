import { useReducer, useState } from 'react'
import './App.css'
import { CounterWithFunc } from './components/CounterWithFunc'
import { ActionTypes, TAction } from './types.app'

const reducer = (state, action: TAction) => {
  switch (action.type) {
    case ActionTypes.INCREASE:
      return {...state.count, count: state.count + action.payload} 
    case ActionTypes.DECREASE:
      return state.count - 1
    default:
      return state;
  }
}

const initialState = {
  count: 0,
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState(0)
console.log(state)

  return (
    <>
      
      <div className="border p-10">
            <p>you are not bad But you are amazing! :D  </p>
            <h2>{state.count}</h2>
            <button className="btn bg-blue-500 p-2" onClick={() => dispatch({type: ActionTypes.INCREASE, payload: 100})}>increament</button>
        </div>
        <CounterWithFunc  state={state} dispatch={dispatch} />
        
    </>
  )
}

export default App
