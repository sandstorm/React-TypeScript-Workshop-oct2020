import React from 'react';
import './App.css';
import Intro from './Intro';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro title="React + TypeScript - Workshop" />
        <List />
      </header>
    </div>
  );
}

export default App;
