import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TodoForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        completed: false
    });

    const isEditMode = !!id;

    // 編集モードの場合、既存のTodoデータを取得
    useEffect(() => {
        if (isEditMode) {
            // 実際のアプリではAPIからデータを取得
            // ここではサンプルデータを使用
            const sampleTodos = [
                { id: 1, title: 'React study', completed: false, description: 'React fundamentals' },
                { id: 2, title: 'TypeScript study', completed: false, description: 'TypeScript fundamentals' },
            ];
            
            const foundTodo = sampleTodos.find(t => t.id === parseInt(id));
            if (foundTodo) {
                setTodo(foundTodo);
            }
        }
    }, [id, isEditMode]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTodo(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 実際のアプリではAPIへの送信処理
        if (isEditMode) {
            alert(`Todo ${id} updated: ${todo.title}`);
        } else {
            alert(`New Todo created: ${todo.title}`);
        }
        
        navigate('/');
    };

    return (
        <div className="todo-form">
            <h1>{isEditMode ? 'Edit Todo' : 'Create New Todo'}</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={todo.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={todo.description || ''}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="completed"
                            checked={todo.completed}
                            onChange={handleChange}
                        />
                        Completed
                    </label>
                </div>
                
                <div className="form-actions">
                    <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;