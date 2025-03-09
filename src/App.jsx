import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="todos/:id" element={<TodoDetail />} />
          <Route path="todos/:id/edit" element={<TodoEdit />} />
          <Route path="*" element={<div>Page not found</div>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
