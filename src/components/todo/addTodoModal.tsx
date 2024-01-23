
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
import { addTodo } from "@/redux/features/todoSlice"
import { useAppDispatch } from "@/redux/hooks"
import  { FormEvent, ReactNode, useState } from "react"

type TAddTodoModalProps = {
    children: ReactNode
}
const AddTodoModal = ({ children }: TAddTodoModalProps) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useAppDispatch()
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        const dateNow = new Date()
        const todo = { 
            id:(Math.random() + 1).toString(36).substring(7) , 
            title, 
            description, 
            time: dateNow.toISOString(),
            completed: false 
        }
        dispatch(addTodo(todo))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Make changes to your task here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Task Title
                            </Label>
                            <Input
                                onBlur={(e) => setTitle(e.target.value)}
                                id="name"
                                placeholder="type your task name.."
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
                                placeholder="type your description"
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

export default AddTodoModal