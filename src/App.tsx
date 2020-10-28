import React from 'react';
import './App.css';
import Intro from './Intro';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro title="React + TypeScript - Workshop" />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
