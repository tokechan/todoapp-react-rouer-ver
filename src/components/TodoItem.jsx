import React from 'react';
import { Link } from "react-router-dom";


function TodoItem({ todo }) {
    return (
        <li className="todo-item">
            <input 
                type="checkbox"
                checked={todo.completed}
                readOnly
            />
            <span style={{ textDecoration: todo.completed ? 'line-threough' : 'none'}}>
                {todo.title}
            </span>
            <div className="todo-actions">
                <Link to={`/todos/${todo.id}`}>Edit</Link>
                <Link to={`/todos/${todo.id}/edit`}>edit</Link>
            </div>
        </li>
    );
}

export default TodoItem;