import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function down(){
  setCount(count-1);
  }
  function up(){
  setCount(count+1);
  }
  function reset(){
  setCount(0);
  }

  return (
    <div className="App">
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <input type="text" />
      <span>{count}</span>
    </div>
  );
}

export default App;
