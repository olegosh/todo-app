import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    items: { tasks } = {},
    handleClickTodo,
    handleDeleteTodoItem,
    handleImportantTodoItem
}) => {

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
                                handleTextClick={handleClickTodo}
                                handleDeleteClick={handleDeleteTodoItem}
                                handleImportantClick={handleImportantTodoItem}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}