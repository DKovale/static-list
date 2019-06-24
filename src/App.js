import React from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <TodoList />
      </header>
    </div>
  );
}

export default App;
