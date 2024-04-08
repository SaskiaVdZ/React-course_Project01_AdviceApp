
import './App.css';

function App() {

async function getAdvice() {
const res = await fetch ('https://api.adviceslip.com/advice');
const data = await res.json();
console.log(data);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!</h1>
        <button onClick={getAdvice}>Get advice</button>
      </header>
    </div>
  );
}

export default App;
