
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoForm = () => {
    const [todoTtile, setTodoTitle] = useState("");
    const { state, dispatch } = useContext(TodoContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const todo = {
            id: (Math.random() + 1).toString(36).substring(7),
            title: todoTtile,
            isCompleted: false
        }
        dispatch({
            type: "addTodo", payload: todo
        })

    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                className="p-2 border-2 border-blue-500"
                onBlur={(e)=>setTodoTitle(e.target.value )}
                placeholder="type your todo name"
                name="todo_title"
                id="" />
            <button type="submit" className="bg-blue-500 text-white font-bold px-3 py-2.5 rounded-md ml-3">submit</button>
        </form>
    );
};

export default TodoForm;
