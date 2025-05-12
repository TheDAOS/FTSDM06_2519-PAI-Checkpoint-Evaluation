import { useDispatch, useSelector } from "react-redux"
import type { stateType, todoType } from "../type"
import Card from "./Card";
import { useEffect, useState } from "react";
import { getDataFromLocal, nextPage, prevPage } from "../redux/todoSlice";

function TodoList() {
    const { todo, loading, page } = useSelector((state: stateType) => state)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState<string>("All")

    useEffect(() => {
        dispatch(getDataFromLocal())
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && todo.length <= 0 && <p>No Data Found</p>}
            {!loading && todo.length > 0 && (
                <div className="mb-5">
                    <div className="p-2 flex gap-2 items-center border-b border-s-stone-900 w-fit">
                        <span className="font-semibold text-lg">FIlter: </span>

                        <select
                            className="p-1 px-2 border-2 border-stone-900 rounded font-semibold hover:bg-stone-600 hover:text-stone-50"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value='All'>All</option>
                            <option value='Completed'>Completed</option>
                            <option value='Incomplete'>Incomplete</option>
                        </select>
                    </div>
                    <div className="p-2 flex gap-2 items-center border-b border-s-stone-900 mb-5 w-fit">
                        <button
                            className="p-1 px-2 border-2 border-stone-900 rounded font-semibold hover:bg-stone-600 hover:text-stone-50"
                            onClick={() => dispatch(prevPage())}
                        >Prev Page</button>

                        <button
                            className="p-1 px-2 border-2 border-stone-900 rounded font-semibold hover:bg-stone-600 hover:text-stone-50"
                            onClick={() => dispatch(nextPage())}
                        >Next Page</button>
                    </div>
                </div>
            )}
            {todo
                .filter((task: todoType) => {
                    if (filter === 'All') return true
                    if (filter === "Completed" && task.completed) return true
                    if (filter === "Incomplete" && !task.completed) return true
                    return false
                })
                .slice((page * 10) - 10, page * 10)
                .map((task: todoType) => <Card task={task} />)}
        </div>
    )
}

export default TodoList;