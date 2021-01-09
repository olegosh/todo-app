import React from 'react';
import { Button } from './Button';

export const TodoItemCreator = ({ handleAddition }) => {
    const createTodoItem = () => {
        const input = document.getElementById('add-inline');
        const text = input.value || 'Task';
        handleAddition(text);
        input.value = '';
    }

    return (
            <div className="col s12">
                <nav>
                    <div className="nav-wrapper green darken-3 row">
                        <div className="input-field inline col s9">
                            <input
                                id="add-inline"
                                type="text"
                                className="validate"
                                placeholder="What needs to be done?"
                            />
                        </div>
                        <div className="cols s3">
                            <ul id="nav-mobile" className="right button-set-bottom hide-on-small-only">
                                <Button text="Add" isActive isAdd handleAddClick={createTodoItem} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    );
}