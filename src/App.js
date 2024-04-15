import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Container from "@mui/material/Container";
import '@fontsource/merriweather/300.css';
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  //whever we need anything to change in the interface we need state
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //fetches data from an external source and stores it in a variable
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    //takes current count and adds 1 which will be the new count

    //async and await make promises easier to write
    //async makes a function return a Promise
    //await makes a function wait for a Promise
  }
  useEffect(function () {
    getAdvice();
  }, []);
  //to make sure that there already is a piece of advice there when you open the app
  // add an empty aray [] at the end to stop it running automatically
  //useEffect allows you to perform side effects after the component has rendered. This ensures a cleaner separation between rendering logic and side effects.

  return (
    <Container justify="center" className="App">
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center" 
        className="App-header">
        <Grid item>
        <Typography className="advice" 
            sx={{ m: 2 }}
            variant="h4"
            component="div"
            color="white">{advice}</Typography>
        </Grid>
        <Button sx={{ mt: 3, mb: 3 }} variant="outlined" onClick={getAdvice}>Get advice</Button>
        <Message count={count}/>
      </Grid >
      </Container>
  );
}

function Message(props) {
  return (
    <Typography variant="subtitle1" fontSize={14} className="counter">
      You have received <strong>{props.count}</strong> pieces of advice
    </Typography>
  );
}
//Props are a fundamental mechanism for passing data between components.
export default App;
