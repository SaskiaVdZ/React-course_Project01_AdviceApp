
import './App.css';
import { useEffect, useState } from 'react';


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
useEffect(function(){
  getAdvice()
}, [])
//to make sure that there already is a piece of advice there when you open the app
// add an empty aray [] at the end to stop it running automatically
//useEffect allows you to perform side effects after the component has rendered. This ensures a cleaner separation between rendering logic and side effects.

  return (
    <div className="App">
      <header className="App-header">
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
       <Message count= {count} />
      </header>
    </div>
  );
}

function Message(props){
  return  <p>You have read <strong>{props.count}</strong> pieces of advice</p>
}
//Props are a fundamental mechanism for passing data between components.
export default App;
