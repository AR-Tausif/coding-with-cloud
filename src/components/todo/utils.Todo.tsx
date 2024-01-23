import { TTodo } from "@/redux/features/todoSlice";

export const handleFindTodoById = (id: string, todos: TTodo[]) =>{
    const todo = todos.find(todo => todo.id === id);
return todo;
}