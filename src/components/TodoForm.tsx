
import React, { useState } from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    };

    return (
        <form action="" onSubmit={handleSubmit}>
        <input 
        onChange={(e)=>useState(e.target.value)}
        type="text" 
        className="p-2 border-2 border-blue-500" 
        placeholder="type your todo name" 
        name="todo name" 
        id="" />
        <button type="submit" className="bg-blue-500 text-white font-bold px-3 py-2.5 rounded-md ml-3">submit</button>
    </form>
    );
};

export default TodoForm;
