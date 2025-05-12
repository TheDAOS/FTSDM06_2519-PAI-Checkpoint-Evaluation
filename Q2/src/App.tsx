import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <BrowserRouter>
      <div className="p-5">
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/user/:userId" element={<p>Tasks by User</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
