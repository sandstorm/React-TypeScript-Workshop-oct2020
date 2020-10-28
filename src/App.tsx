import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import Intro from './Intro';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">TODO List</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/todos">
            <TodoList />
          </Route>
          <Route path="/counter">
            <Counter stepSize={1} />
          </Route>
          <Route path="/">
            <Intro title="React + TypeScript - Workshop" />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
