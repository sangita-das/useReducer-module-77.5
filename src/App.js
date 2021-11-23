import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import Count from './Components/Count';
import Portal from './Components/Portal';

function App() {

  // const [user, setUser] = useState([]);
  const [state, dispatch] = useReducer()
  return (
    <div className="App">
<Count></Count>
<Portal></Portal>
    </div>
  );
}

export default App;
