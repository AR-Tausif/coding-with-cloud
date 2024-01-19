import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";


const TodoApp = () => {
    

    return (
        <div className="flex justify-center items-center">
           <div>
           <h1 className="text-center font-bold text-purple-600 mb-4 text-xl">TodoApp</h1>
           <TodoForm/>
           <TodoLists/>
           </div>
        </div>
    );
};

export default TodoApp;
