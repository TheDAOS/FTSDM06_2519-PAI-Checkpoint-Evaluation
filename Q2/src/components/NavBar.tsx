import { Link } from "react-router";

function NavBar() {
    return (
        <div>
            <h1 className='text-5xl font-semibold my-3 border-b-2 border-stone-900'>Todo List</h1>
            <nav className="flex gap-2 ms-2">
                <Link to="/">Home</Link>
                <Link to="/add">Add Task</Link>
            </nav>
        </div>
    )
}

export default NavBar