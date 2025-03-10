import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Todo App with React Router</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/todos/new">New Todo</Link>
                </nav>
            </header>
            
            <main className="app-main">
                <Outlet /> {/* 子ルートのコンポーネントがここに表示されます */}
            </main>
            
            <footer className="app-footer">
                <p>&copy; 2025 Todo App with React Router</p>
            </footer>
        </div>
    );
}

export default Layout;