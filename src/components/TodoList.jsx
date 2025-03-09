import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';

function TodoList () {
    const  [todos, setTodos] = useState([
        { id: 1, title: 'React study', completed: false },
        { id: 2, title: 'TypeScript study', completed: false },
    ]);

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <Link to="/todos/new">New Create</Link>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;