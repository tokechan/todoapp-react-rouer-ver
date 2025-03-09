import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    //real app use API but this code use sample data
    useEffect(() => {
        //sample data
        const smapleTodos = [
            { id: 1, title: 'React study', completed: false, descripton: 'React fundamentals' },
            { id: 2, title: 'TypeScript study', completed: false, descripton: 'TypeScript fundamentals' },
        ];

        const foundTodo =sampleTodos.find(t => t.id === parseInt(id));
        setTodo(foundTodo);
    }, [id]);

    const handleDelete = () => {
        //real app use API call or delete
        alert(`Todo ${id} deleted`);
        navigate('/');
    };

    if  (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="todo-detail">
            <h1>{todo.title}</h1>
            <p><strong>status:</strong> {todo.completed ? 'Completed' : 'Not Completed'}</p>
            <p><strong>description:</strong> {todo.description}</p>

            <div className="todo-actions">
                <Link to={`/todos/${todo.id}/edit`}>Edit</Link>
                <button onClick={handleDelete}>Delete</button>
                <Link to="/">Back to List</Link>
            </div>
        </div>
    );
}

export default TodoDetail;
