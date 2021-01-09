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
    const [displayedTodo, setDisplayedTodo] = useState({ tasks: DEFAULT_TASKS });
    const [search, setSearch] = useState(false);

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
        console.log('toggling completion ', toggleId);
        const taskToToggle = filteredTodo.tasks.find(({ id }) => id === toggleId);
        if (taskToToggle) {
            taskToToggle.completed = !taskToToggle.completed;
            setFiltration(filter);
        }
    }

    const toggleImportance = (toggleId) => {
        console.log('toggling importance ', toggleId);
        const taskToToggle = filteredTodo.tasks.find(({ id }) => id === toggleId);
        if (taskToToggle) {
            taskToToggle.highPriority = !taskToToggle.highPriority;
            setFiltration(filter);
        }
    }

    const deleteTodoListItem = (deleteId) => {
        console.log('deleting todo list item ', deleteId);
        const indexOfTaskToDelete = filteredTodo.tasks.findIndex(({ id }) => id === deleteId);
        if (indexOfTaskToDelete !== -1) {
            todo.tasks.splice(indexOfTaskToDelete, 1);
            const changedTasks = todo.tasks;
            setTodo({ tasks: changedTasks });
            //TODO set in storage
            console.log('todo after deletion', todo.tasks);
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
        console.log('Added todo item ', newTodoItem);
    };

    const searchTodoItem = (searchText, filter) => {
        // addNewTodoItem();
        const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME));
        setTodo(storedTodo);
        setFilteredTodo(storedTodo);
        setFiltration(filter);
        console.log('searching by ', searchText);
        console.log(filteredTodo);
        let filtered = todo.tasks
            .filter(({ text }) => (text.toUpperCase()).includes(searchText.toUpperCase()));
        console.log('filter', filter);
        if (filter === 'Active') {
            filtered = filtered.filter((task) => !task.completed);
        }
        if (filter === 'Done') {
            filtered = filtered.filter((task) => task.completed);
        }
        setFilteredTodo({ tasks: filtered });
    };

    // const stored = JSON.parse(localStorage.getItem(STORAGE_NAME));
    // const todo = stored || { tasks: DEFAULT_TASKS };
    
    const getDataFromStore = useCallback(
        () => {
            // setLoading(true);
            console.log('getting data...', JSON.parse(localStorage.getItem(STORAGE_NAME)));
            const storedTodo = JSON.parse(localStorage.getItem(STORAGE_NAME)) || { tasks: DEFAULT_TASKS };
            console.log(storedTodo);
            setTodo(storedTodo);
            console.log('todo', todo);
            setFiltration(filter);
            // filterTodoList(filter);
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

    console.log(filteredTodo);
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