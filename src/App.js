import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {id: 0, complited: false, name: 'buy milk'},
    {id: 1, complited: false, name: 'buy bread'}
  ];
  return (
    <div className='wrapper'>
      <h1>Things to do <span role="img" aria-label="honeybee">🐝</span> </h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
