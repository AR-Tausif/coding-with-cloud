
import { useState } from "react"
import { decrement, increment, incrementByAmount } from "./redux/features/ConterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch()
  let str ="" ;
  let arr:string[]=[]
  for(let i = 0; i < count; i++){
    str=str+1
    arr.push("1")
  }
  console.log("app rendered")
  // console.log(str)

  const incrementFunc =()=>{
    dispatch(increment())

    console.log(str)
  }
    return (
    <>
      <div className="h-screen w-screen flex flex-col space-y-9 justify-center items-center">
      <div className="space-x-5 border-gray-200 border-2 p-10 rounded-md bg-purple-100">
        <button 
        className="bg-green-500 px-4 py-2"
        onClick={incrementFunc}
        >
          Increament
        </button>
        <button 
        className="bg-green-500 px-4 py-2"
        onClick={()=>dispatch(incrementByAmount(5))}
        >
          Increament By 100
        </button>
        <button>{count}</button>
        <button 
        className="bg-red-500 px-4 py-2"
        onClick={()=>dispatch(decrement())}
        >
          Decreament
        </button>
      </div>
      <div className="broder-blue-200 border-2 p-10">
        <h1 className="text-xl">
          {arr.map((a,i)=> <span key={i} className="line-throug">{a}</span>)}
        </h1>
      </div>
      </div>
    </>
  )
}

export default App
