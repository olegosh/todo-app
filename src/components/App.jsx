import React, { useCallback, useEffect, useState } from 'react';
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
    const STORAGE_NAME = 'todoStorage';

    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({ tasks: DEFAULT_TASKS });
    const [filteredTodo, setFilteredTodo] = useState({ tasks: DEFAULT_TASKS });

    const filterTodoList = (type) => {
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
        filterTodoList(currentFilter);
    };

    const toggleCompleted = (toggleId) => {
        const taskToToggle = filteredTodo.tasks.find(({ id }) => id === toggleId);
        if (taskToToggle) {
            taskToToggle.completed = !taskToToggle.completed;
            setFiltration(filter);
        }
        setToggledTask(toggleId, taskToToggle);
    }

    const toggleImportance = (toggleId) => {
        const taskToToggle = filteredTodo.tasks.find(({ id }) => id === toggleId);
        if (taskToToggle) {
            taskToToggle.highPriority = !taskToToggle.highPriority;
            setFiltration(filter);
        }
        setToggledTask(toggleId, taskToToggle);
    }

    const setToggledTask = (toggleId, taskToToggle) => {
        const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME));
        const indexOfTaskToSet = storedTodo.tasks.findIndex(({ id }) => id === toggleId);
        const newStoredTasks = [...storedTodo.tasks];
        newStoredTasks.splice(indexOfTaskToSet, 1, taskToToggle);
        setDataInStore(newStoredTasks);
    };

    const deleteTodoListItem = (deleteId) => {
        const indexOfTaskToDelete = filteredTodo.tasks.findIndex(({ id }) => id === deleteId);
        if (indexOfTaskToDelete !== -1) {
            todo.tasks.splice(indexOfTaskToDelete, 1);
            const changedTasks = todo.tasks;
            setTodo({ tasks: changedTasks });
            setDataInStore(todo.tasks);
            setFiltration(filter);
        }
    }

    const addNewTodoItem = (text) => {
        let newTodoItem;
        if (text) {
            newTodoItem = {
                highPriority: false,
                completed: false,
                text,
                id: generateId()
            }
            todo.tasks.push(newTodoItem);
        }
        setDataInStore(todo.tasks);
        setFiltration(filter);
    };

    const searchTodoItem = (searchText, filter) => {
        // addNewTodoItem();
        const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME));
        setTodo(storedTodo);
        setFilteredTodo(storedTodo);
        setFiltration(filter);
        let filtered = todo.tasks
            .filter(({ text }) => (text.toUpperCase()).includes(searchText.toUpperCase()));
        if (filter === 'Active') {
            filtered = filtered.filter((task) => !task.completed);
        }
        if (filter === 'Done') {
            filtered = filtered.filter((task) => task.completed);
        }
        setFilteredTodo({ tasks: filtered });
    };
    
    const getDataFromStore = useCallback(
        () => {
            const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME)) || { tasks: DEFAULT_TASKS };
            setTodo(storedTodo);
            setFiltration(filter);
            setTimeout(() => document.getElementById('All').click());
            setLoading(false);
        },
        [DEFAULT_TASKS, setFiltration, todo]
    );

    const setDataInStore = (data) => {
        localStorage.setItem(
            STORAGE_NAME,
            JSON.stringify({
                tasks: data
            })
        );
    }

    useEffect(() => getDataFromStore(), []);

    return (
        <>
            {
                loading ?
                <Loader /> :
                (<div className="container">
                    <Logo
                        doneCounter={(todo.tasks.filter((task) => task.completed)).length}
                        todoCounter={todo.tasks.length - (todo.tasks.filter((task) => task.completed)).length}
                    />
                    <Navbar
                        filter={filter}
                        handleFiltration={setFiltration}
                        handleSearch={searchTodoItem}
                    />
                    <TodoList
                        items={filteredTodo}
                        handleClickTodo={toggleCompleted}
                        handleDeleteTodoItem={deleteTodoListItem}
                        handleImportantTodoItem={toggleImportance}
                    />
                    <TodoItemCreator handleAddition={addNewTodoItem} />
                </div>)
            }
        </>
    );
}