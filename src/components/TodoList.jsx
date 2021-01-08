import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    return (
        <div>
            <ul className="collection">
                <TodoItem text="Drink tea" />
                <TodoItem text="Learn React" />
                <TodoItem text="Make awesome SPA" />
            </ul>
        </div>
    );
}