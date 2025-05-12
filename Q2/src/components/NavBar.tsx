import { Link } from "react-router";

function NavBar() {
    return (
        <div className="my-3 border-b-2 border-stone-900 flex items-center">
            <h1 className='text-5xl font-semibold my-3 tracking-wider'>Todo List</h1>
            <nav className="flex gap-2 ms-3">
                <Link
                    to="/"
                    className="p-1 px-2 border-2 border-stone-900 rounded-4xl font-semibold hover:bg-stone-600 hover:text-stone-50"
                >Home</Link>

                <Link
                    to="/add"
                    className="p-1 px-2 border-2 border-stone-900 rounded-4xl font-semibold hover:bg-stone-600 hover:text-stone-50"
                >Add Task</Link>
            </nav>
        </div>
    )
}

export default NavBar