import React from 'react';
import {AppUI} from './AppUI'

/* const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Lalalala', completed: false }
] */
function App(props) {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos)
  {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }
  else
  { 
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos); /*en el futuro se establece que el contenido es [] para definir un array vacio que permita que el usuario cree sus todos.*/
  const [searchValue, setSearchValue] = React.useState('');

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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

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
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
