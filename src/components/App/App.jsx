import {useState, useEffect} from 'react';
import List from '../List';
import Search from '../Search';
import './App.css';

const data = [
  'HTML',
  'CSS',
  'JS',
]

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value) }>
          Find course:
        </Search>
        <List items={data} />
      </header>
    </div>
  );
}

export default App;
