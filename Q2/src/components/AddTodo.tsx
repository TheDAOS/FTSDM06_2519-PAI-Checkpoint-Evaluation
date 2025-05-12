import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

function AddTodo() {
    const [task, setTask] = useState<string>("");
    const dispatch = useDispatch()

    const HandleAdd = () => {
        dispatch(addTask(task))
        setTask('')
    }

    return (
        <div className="flex gap-2 border-b border-stone-900 w-fit">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className=""
                placeholder="Task Title"
            />
            <button
                onClick={HandleAdd}
                className="p-1 px-2 border-2 border-stone-900 rounded-t font-semibold hover:bg-stone-600 hover:text-stone-50"
            >Add</button>
        </div>
    )
}

export default AddTodo;