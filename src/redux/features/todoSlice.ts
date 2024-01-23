import { createSlice } from "@reduxjs/toolkit";
export type TTodo ={
    id: string,
    title: string,
    time: string,
    description: string,
    completed: boolean,
}
type TTodoState = {
    todos: TTodo[]
}

const initialState:TTodoState = {
    todos:[]
}
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            return {
                todos: [...state.todos, action.payload,]
            }
        },
        editTodoById: (state, action)=>{
           
            return {
               todos: [state.todos.find((todo)=> todo.id === action.payload.id), action.payload]
            }
        },
        deleteTodo: (state, action)=>{
            return {
                todos: state.todos.filter((todo)=> todo.id !== action.payload)
            }
        }
    }
})



export const {addTodo,editTodoById, deleteTodo}= todoSlice.actions
export default todoSlice.reducer