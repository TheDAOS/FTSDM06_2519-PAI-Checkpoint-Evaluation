import type { taskProp } from "../type";

function Card({ task }: taskProp) {

    return (
        <div className="p-2 border-b border-stone-900 max-w-90 flex items-center gap-2">
            <span className="p-1 border-6 rounded-full border-blue-700"></span>
            <span className={`${task.completed ? "line-through" : ""}`}>{task.title}</span>
        </div>
    )
}

export default Card;