import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import TodoList from './components/TodoList'
import TodoDetail from './components/TodoDetail'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="todos/:id" element={<TodoDetail />} />
          <Route path="todos/new" element={<TodoForm />} />
          <Route path="todos/:id/edit" element={<TodoForm />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App