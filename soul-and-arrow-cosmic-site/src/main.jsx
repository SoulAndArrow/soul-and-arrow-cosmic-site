import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => (
  <div className="hero">
    <div className="overlay">
      <h1>You are not a profile. You are a Presence.</h1>
      <p>A living frequency. A sacred tree. A journey home.</p>
      <button onClick={() => alert('Entering the Tree...')}>Enter the Tree</button>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
