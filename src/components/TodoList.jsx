import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ items: { tasks } = {}, handleClickTodo }) => {

    // const forwardClick = (e) => handleClickTodo(e);

    return (
        <div>
            <ul className="collection">
                {
                    tasks.map((task) => {
                        return (
                            <TodoItem
                                text={task.text}
                                key={task.id}
                                id={task.id}
                                isCompleted={task.completed}
                                isHighPriority={task.highPriority}
                                handleClick={handleClickTodo}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}