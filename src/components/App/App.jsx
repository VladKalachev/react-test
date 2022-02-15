import {useState, useEffect} from 'react';
import List from '../List';
import './App.css';

const data = [
  'HTML',
  'CSS',
  'JS',
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <List items={data} />
      </header>
    </div>
  );
}

export default App;
