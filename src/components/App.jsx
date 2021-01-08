import React from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoList } from './TodoList';

export const App = () => {
    return (
        <div className="container">
            <Logo />
            <Navbar />
            <TodoList />
            <TodoItemCreator />
        </div>
    );
}