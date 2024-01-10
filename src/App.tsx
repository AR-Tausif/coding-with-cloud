import { useReducer, useState } from 'react'
import './App.css'
import { CounterWithFunc } from './components/CounterWithFunc'

enum ActionTypes {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}
type TAction={
  type: ActionTypes,
  payload: number
}
type TCurrState = {
   count: number 
}
const reducer = (state: TCurrState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.INCREASE:
      return state.count + 1
    case ActionTypes.DECREASE:
      return state.count - 1
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {count:0})
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="">
        <CounterWithFunc count={count} setCount={setCount} state={state} dispatch={dispatch} />
      </h1>
    </>
  )
}

export default App
