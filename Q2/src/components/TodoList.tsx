import { useSelector } from "react-redux"
import type { stateType, todoType } from "../type"
import Card from "./Card";

function TodoList() {
    const todo = useSelector((state: stateType) => state.todo)

    return (
        <div>
            {todo.map((task: todoType) => <Card task={task}/>)}
        </div>
    )
}

export default TodoList;