import React from 'react';
import { Button } from './Button';
import classNames from 'classnames';

export const TodoItem = ({
    text,
    id,
    isHighPriority,
    isCompleted,
    handleTextClick,
    handleDeleteClick,
    handleImportantClick
}) => {
    const handleDeletion = () => handleDeleteClick(id);
    const handleImportance = () => handleImportantClick(id);
    
    const elementClasses = classNames({
        'list-item-text': true,
        'hight-priority': isHighPriority,
        'completed': isCompleted
    });

    const textElement = (
        <span
            id={id}
            className={elementClasses}
            onClick={() => handleTextClick(id)}
        >
            {text}
        </span>
    );

    return (
        <li className="collection-item">
            { textElement }
            <Button
                isListItemButton
                icon="priority_high"
                isImportant
                handleImportantClick={handleImportance}
                />
            <Button
                isListItemButton
                icon="delete_forever"
                isDelete
                handleDeleteClick={handleDeletion}
            />
        </li>
    );
}
