import { useDispatch, useSelector } from "react-redux"
import type { stateType, todoType } from "../type"
import Card from "./Card";
import { useEffect } from "react";
import { getData, getDataFromLocal } from "../redux/todoSlice";

function TodoList() {
    let { todo, loading } = useSelector((state: stateType) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataFromLocal())
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && todo.length <= 0 && <p>No Data Found</p>}
            {!loading && todo.length > 0 && (
                <div className="p-2 flex gap-2 items-center border-b border-s-stone-900 mb-5 w-fit">
                    <span className="font-semibold text-lg">FIlter: </span>

                    <select
                        className="p-1 px-2 border-2 border-stone-900 rounded font-semibold hover:bg-stone-600 hover:text-stone-50"
                    >
                        <option value={null}>All</option>
                        <option value={true}>Completed</option>
                        <option value={false}>Incomplete</option>
                    </select>
                </div>
            )}
            {todo.map((task: todoType) => <Card task={task} />)}
        </div>
    )
}

export default TodoList;