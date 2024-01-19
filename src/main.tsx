import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.tsx'
import TodoProvider from './context/TodoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
    <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>,
)
