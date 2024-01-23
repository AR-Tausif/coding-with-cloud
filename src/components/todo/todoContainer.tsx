import { useAppSelector } from "@/redux/hooks"
import { Button } from "../ui/button"
import AddTodoModal from "./addTodoModal"
import TodoCard from "./todoCard"
import TodoDropdown from "./todoDropdown"

const TodoContainer = () => {
    const {todos} = useAppSelector(state=>state.todos)
    console.log(todos)
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal>
                <Button className="bg-primary-gradient text-xl">Add Todo</Button>
                </AddTodoModal>

                <TodoDropdown>
                    <Button  className="outline bg-none">Filter</Button>
                </TodoDropdown>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl p-2">
                
                <div className="bg-white space-y-1 rounded-lg p-5">
                    
                    {
                        todos.length ===0?  <div className="font-semibold bg-white p-3 rounded-md text-center"> 
                        <p>There is no tosk pending</p>{' '}
                    </div> :  todos.map((todo)=> (<TodoCard key={todo.id} todo={todo}/>))
                    }
                </div>

            </div>
        </div>
    )
}

export default TodoContainer