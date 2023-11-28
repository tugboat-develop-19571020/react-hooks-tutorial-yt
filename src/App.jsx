import { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import SugieContext from './index';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const sugieInfo = useContext(SugieContext);
  const inputRef = useRef();
  
  const handleClick = () => {
    setCount(count + 1);
  }

  const handleRef = () => {
    console.log(inputRef.current.value);
    console.log(inputRef.current.offsetHeight);
    inputRef.current.select();
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

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleRef}>useRef</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
