import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import SugieContext from './index';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state + 1 >= 10) {
        state = 10;
        return state;
      } else {
        return state + 1;
      }
    case "decrement": 
      if (state - 1 <= 0) {
        state = 0;
        return state;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const sugieInfo = useContext(SugieContext);
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, 0);
  
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

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>－</button>

    </div>
  );
}

export default App;
