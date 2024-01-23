
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo, editTodoById } from "@/redux/features/todoSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { FormEvent, ReactNode, useState } from "react"
import { handleFindTodoById } from "./utils.Todo"

type TEditTodoModalProps = {
    children: ReactNode, id: string
}
const EditTodoModal = ({ id }: TEditTodoModalProps) => {
    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { todos } = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()


    const handleFindTodo =()=>{
        const todoById = todos.find(todo => todo.id === id);
        setTodo(todoById)
    }

const handleEditTodo = (e: FormEvent) => {
    e.preventDefault()

    const editedTodo = {
        id,
        title,
        description,
        time: todo?.title,
        completed: false
    }
    dispatch(editTodoById(editedTodo))
}

return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="bg-blue-500" onClick={ handleFindTodo }>
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Task</DialogTitle>
                <DialogDescription>
                    Make changes to your task here. Click save when editing you're done.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditTodo}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Task Title
                        </Label>
                        <Input
                            onBlur={(e) => setTitle(e.target.value)}
                            id="name"
                            defaultValue={todo?.title}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input
                            onBlur={(e) => setDescription(e.target.value)}
                            id="username"
                            defaultValue={todo?.description}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </form>

        </DialogContent>
    </Dialog>
)
}

export default EditTodoModal