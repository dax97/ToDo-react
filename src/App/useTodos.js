import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => !!todo.completed).length; /*!!todo.completed = todo.completed = "true"*/
    const totalTodos = todos.length;
    
    let searchedTodos = [];

    if (!searchValue.length >= 1)
    {
    searchedTodos = todos;
    }
    else
    {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    });
    
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
        /* todos[todoIndex] = {
            text: todos[todoIndex].text,
            completed:true,
        } */
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        /* todos[todoIndex] = {
            text: todos[todoIndex].text,
            completed:true,
        } */
    }
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        /* todos[todoIndex] = {
            text: todos[todoIndex].text,
            completed:true,
        } */
    }    
    return{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
    };
}

export { useTodos };