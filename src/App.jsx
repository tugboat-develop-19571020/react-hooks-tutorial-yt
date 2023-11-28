import { useContext, useEffect, useState } from 'react';
import './App.css';
import SugieContext from './index';

function App() {
  const [count, setCount] = useState(0);
  const sugieInfo = useContext(SugieContext);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Hello Hooks");
    // setCount(count + 1);
  }, [count]);
  
  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{sugieInfo.name}</p>
      <p>{sugieInfo.age}</p>
    </div>
  );
}

export default App;
