import React from 'react';
import classNames from 'classnames';

export const Button = ({ text, isActive, isListItemButton, icon, isHighPriority, isCompleted, handleButtonClick }) => {
    const elementClasses = classNames({
        'select-button waves-effect waves-teal btn-flat': true,
        'button-active': isActive,
        'button-inactive': !isActive,
        'list-item-button float-right': isListItemButton,
        'green lighten-4': icon === 'priority_high',
        'red lighten-4': icon === 'delete_forever',
        'hight-priority': isHighPriority,
        'completed': isCompleted
    });

    const iconElement = <i className="material-icons">{icon}</i>;

    return (
        <span
            id="btn-all"
            className={elementClasses}
            onClick={() => handleButtonClick(text)}
        >
            { text }
            { icon ? iconElement : null }
        </span>
    );
}
