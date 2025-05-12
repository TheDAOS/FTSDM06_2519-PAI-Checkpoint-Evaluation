import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";

function App() {

  return (
    <BrowserRouter>
      <div className="p-5">
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<p>add</p>} />
          <Route path="/user/:userId" element={<p>Tasks by User</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
