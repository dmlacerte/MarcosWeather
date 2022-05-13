import React from 'react';
import './App.css';
import Home from './componentes/Home';

function App() {
  return (
    <>
      <header>
        <h1 className="name">React Weather</h1>
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
