import { useDispatch, useSelector } from "react-redux"
import type { stateType, todoType } from "../type"
import Card from "./Card";
import { useEffect } from "react";
import { getData, getDataFromLocal } from "../redux/todoSlice";

function TodoList() {
    const { todo, loading } = useSelector((state: stateType) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataFromLocal())
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && todo.length <= 0 && <p>No Data Found</p>}
            {todo.map((task: todoType) => <Card task={task} />)}
        </div>
    )
}

export default TodoList;