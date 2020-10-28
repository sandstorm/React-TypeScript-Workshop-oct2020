import React from 'react';
import './App.css';
import ComponentWithChildren from './ComponentWithChildren';
import Counter from './Counter';
import Intro from './Intro';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter stepSize={1} />
        <Counter stepSize={10} />
        <Intro title="React + TypeScript - Workshop" />
        <ComponentWithChildren>
          <p>Foo</p>
        </ComponentWithChildren>
        <List />
      </header>
    </div>
  );
}

export default App;
