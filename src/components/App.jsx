import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoList } from './TodoList';
import { Loader } from './Loader';
import { generateId } from '../utils/utils';

export const App = () => {
    const DEFAULT_TASKS = [
        { highPriority: false, completed: true, text: 'Drink tea', id: generateId() },
        { highPriority: true, completed: false, text: 'Learn React', id: generateId() },
        { highPriority: false, completed: false, text: 'Make awesome SPA', id: generateId() }
    ];

    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState({ tasks: DEFAULT_TASKS });
    const [filteredTodo, setFilteredTodo] = useState({ tasks: DEFAULT_TASKS });

    const filterTodoList = (type) => {
        //All, Active, Done
        let filtered = [...todo.tasks];
        if (type === 'Active') {
            filtered = todo.tasks.filter((task) => !task.completed);
        }
        if (type === 'Done') {
            filtered = todo.tasks.filter((task) => task.completed);
        }
        setFilteredTodo({ tasks: filtered });
    };

    const setFiltration = (currentFilter) => {
        setFilter(currentFilter);
        // console.log('filter', filter);
        // console.log('currentFilter', currentFilter);
        filterTodoList(currentFilter);
    };

    const toggleCompleted = (toggleId) => {
        console.log('toggling ', toggleId);
        const taskToToggle = filteredTodo.tasks.find(({ id }) => id === toggleId);
        taskToToggle.completed = !taskToToggle.completed;
        setFiltration(filter);
    }

    // const stored = JSON.parse(localStorage.getItem(STORAGE_NAME));
    // const todo = stored || { tasks: DEFAULT_TASKS };
    
    const getDataFromStore = () => {
        const STORAGE_NAME = 'todoStorage';
        setLoading(true);
        const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME)) || { tasks: DEFAULT_TASKS };
        console.log(storedTodo);
        setTodo(storedTodo);
        // filterTodoList(filter);
        setLoading(false);
    };

    useEffect(() => getDataFromStore(), []);

    console.log(filteredTodo);
    return (
        <>
            {
                loading ?
                <Loader /> :
                <div className="container">
                    <Logo />
                    <Navbar filter={filter} handleFiltration={setFiltration} />
                    <TodoList items={filteredTodo} handleClickTodo={toggleCompleted} />
                    <TodoItemCreator />
                </div>
            }
        </>
    );
}