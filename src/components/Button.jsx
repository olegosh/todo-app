import React from 'react';
import classNames from 'classnames';

export const Button = ({
        text,
        isActive,
        isListItemButton,
        icon,
        isHighPriority,
        isCompleted,
        handleButtonClick,
        isDelete,
        isImportant,
        handleDeleteClick,
        handleImportantClick
    }) => {
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

    const selectHandleButtonClick = () => {
        if (!isDelete && !isImportant) {
            handleButtonClick(text);
        }
        if (isDelete) {
            handleDeleteClick();
        }
        if (isImportant) {
            handleImportantClick();
        }
    };

    return (
        <span
            id="btn-all"
            className={elementClasses}
            onClick={selectHandleButtonClick}
        >
            { text }
            { icon ? iconElement : null }
        </span>
    );
}
