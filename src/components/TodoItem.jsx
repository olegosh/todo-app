import React from 'react';
import { Button } from './Button';

export const TodoItem = ({ text }) => {
    return (
        <li className="collection-item">
            { text }
            <Button isListItemButton icon="priority_high" />
            <Button isListItemButton icon="delete_forever" />
        </li>
    );
}
