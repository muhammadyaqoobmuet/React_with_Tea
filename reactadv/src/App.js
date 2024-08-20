import { useState } from "react";


function App() {

  const [count,setCount] = useState(0);

  return (
   <h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>+</button>
    <p>count{count}</p>
    <button>-</button>
   </h1>
  );
}

export default App;
