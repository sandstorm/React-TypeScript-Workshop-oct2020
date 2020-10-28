import React, {useState} from 'react';
import './App.css';
import Intro from './Intro';

function App() {
  const [text, setText] = useState('Hallo Welt')
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Intro title="React + TypeScript - Workshop" />
        
        <h2>Controlled Input</h2>
        <input type="text" value={text} onChange={handleTextChange} />
        <p>Text: {text}</p>
      </header>
    </div>
  );
}

export default App;
