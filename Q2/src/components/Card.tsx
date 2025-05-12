import { useDispatch } from "react-redux";
import type { taskProp } from "../type";
import { toggleTask } from "../redux/todoSlice";

function Card({ task }: taskProp) {
    const dispatch = useDispatch()

    return (
        <div
            className="p-2 border-b border-stone-900 max-w-100 flex items-center gap-2 cursor-pointer"
            onClick={() => dispatch(toggleTask(task.id))}
        >
            <span className="p-1 border-6 rounded-full border-blue-700"></span>
            <span className={`${task.completed ? "line-through" : ""}`}>{task.title}</span>
        </div>
    )
}

export default Card;