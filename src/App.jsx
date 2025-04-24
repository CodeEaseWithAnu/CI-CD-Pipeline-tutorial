import React from 'react';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="World" />
      </header>
    </div>
  );
}

export default App;