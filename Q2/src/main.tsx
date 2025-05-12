import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoProvider from './redux/TodoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
