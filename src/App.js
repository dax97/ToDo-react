import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Lalalala', completed: false }
]
function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos); /*en el futuro se establece que el contenido es [] para definir un array vacio que permita que el usuario cree sus todos.*/
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed:true,
    } */
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    /* todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed:true,
    } */
  }
  return (
    <React.Fragment> {/* = <>*/}
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}                                                                       
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>  /*= </>*/
  );
}

export default App;
