import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">MySite</h2>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <main>
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple static homepage with a navbar.</p>
      </main>
    </div>
  );
}

export default App;
