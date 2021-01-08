import React from 'react';
import { Button } from './Button';
import classNames from 'classnames';

export const TodoItem = ({ text, id, isHighPriority, isCompleted, handleClick }) => {
    const elementClasses = classNames({
        'list-item-text': true,
        'hight-priority': isHighPriority,
        'completed': isCompleted
    });

    const textElement = (
        <span
            id={id}
            className={elementClasses}
            onClick={() => handleClick(id)}
        >
            {text}
        </span>
    );

    return (
        <li className="collection-item">
            { textElement }
            <Button isListItemButton icon="priority_high" />
            <Button isListItemButton icon="delete_forever" />
        </li>
    );
}
