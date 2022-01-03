import React from 'react';
//import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]
function App(porps) {
  return (
    <React.Fragment> {/* = <>*/}
      {/*<TodoCounter />*/}
      <h2>Has completado 2 de 3 TODOSs</h2>

      {/*<TodoSearch />*/}
        <input placeholder="Cebolla" />
      {/*<TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}                                                                       
      </TodoList>*/}

      {/*<CreateTodoButton />*/}
    </React.Fragment>  /*= </>*/
  );
}

export default App;
