import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterState = {
    count:number
}
const initialState :CounterState= {count:0}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.count+=1
        },
        incrementByAmount: (state, action: PayloadAction<number>)=>{
            state.count = state.count + action.payload
        },
        decrement: (state)=>{
            state.count-=1
        }
    }
})

export const {increment,incrementByAmount, decrement}= CounterSlice.actions
export default CounterSlice.reducer