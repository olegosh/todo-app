import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ items: { tasks } = {} }) => {
    return (
        <div>
            <ul className="collection">
                {
                    tasks.map((task) => {
                        return (
                            <TodoItem
                                text={task.text}
                                key={task.id}
                                isCompleted={task.completed}
                                isHighPriority={task.highPriority}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}