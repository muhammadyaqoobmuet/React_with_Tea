import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  const [countHistory, setCountHistory] = useState([]);

  const addValue = () => {
    count = count + 1;
    
    if(count<20){
      setCount(count);
      setCountHistory([...countHistory, count]);
    }else{
      alert("values from 0 - 20 are allowed");
       count=0
    }

  };

  const decValue = () => {
    const newCount = count - 1;
    
    if(count>0){
      setCount(newCount);
      setCountHistory([...countHistory, newCount]);
    }
  };

  return (
    <>
      <h1 className='text-5xl font-bold text-white my-6'>Why we need hooks</h1>
      <h2 className='text-2xl my-2'>Count: {count}</h2>
      <button onClick={addValue}>Increase Count</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Count</button>
      <br />
      <p>Current Count is {countHistory.join(', ')}</p>
    </>
  );
}

export default App;
