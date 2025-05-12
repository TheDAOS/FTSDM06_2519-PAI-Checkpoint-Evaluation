import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="p-5">
        <h1 className='text-5xl font-semibold'>Todo List</h1>
        <Routes>
          <Route path="/" element={<p>list</p>} />
          <Route path="/add" element={<p>add</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
