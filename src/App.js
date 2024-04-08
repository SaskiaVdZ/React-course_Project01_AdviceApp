
import './App.css';
import { useState } from 'react';


function App() {
const [advice, setAdvice]= useState("");
//whever we need anything to change in the interface we need state
const [count,setCount]= useState(0);

async function getAdvice() {
const res = await fetch ('https://api.adviceslip.com/advice');
const data = await res.json();
//fetches data from an external source and stores it in a variable
setAdvice(data.slip.advice);
setCount (c => c + 1);
//takes current count and adds 1 which will be the new count

//async and await make promises easier to write
//async makes a function return a Promise
//await makes a function wait for a Promise
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
        <p>You have read <strong>{count}</strong> pieces of advice</p>
      </header>
    </div>
  );
}

export default App;
