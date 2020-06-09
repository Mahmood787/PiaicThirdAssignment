import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(prop) {
  return (
    <div className="App">
      Hello <strong>{prop.name}</strong>
      <h2 className="zzz">Your favourite fruits are:</h2>
      <ul>
      <li>Apple </li>
      <li>Orange</li>
      <li>Banana</li>
      <li>Watermelon</li>
      </ul>
      <h2>Your favourite cuzines are:</h2>
      <ol>
        <li>Biryani</li>
        <li>Nihari</li>
        <li>Payee</li>
      </ol>
      your age is {prop.age + 2}
    </div>
    
  );
}

export default App;
