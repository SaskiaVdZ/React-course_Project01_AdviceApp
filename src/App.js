import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Illustration from "./images/Illustration.png";
import "@fontsource/merriweather/300.css";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("white"); // New state for background color
  //whever we need anything to change in the interface we need state

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
    const randomColor = generateRandomColor(); // Generate random color
    setBackgroundColor(randomColor); // Update background color
  }

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
    
  useEffect(function () {
    // eslint-disable-next-line 
    getAdvice();
  }, []);
   //to make sure that there already is a piece of advice there when you open the app
  // add an empty aray [] at the end to stop it running automatically
  //useEffect allows you to perform side effects after the component has rendered. This ensures a cleaner separation between rendering logic and side effects.

  return (
    <Container className="App" style={{ backgroundColor}}> {/* Set background color using state */}
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center" 
        className="App-header"
        >
        <Grid item>
          <Grid item>
            <img src={Illustration} alt="A person with question marks floating above their head" />
          </Grid>
          <Typography className="advice" 
            sx={{ mt: 3,  mb:3 }}
            variant="h4"
            component="div"
            color="white">{advice}</Typography>
        </Grid>
        <Grid item>
        <Button sx={{ mt: 3, mb: 3 }} variant="contained" onClick={getAdvice}>Get advice</Button>
        <Message count={count} />
        </Grid>
        <Grid item 
        justifySelf="flex-end">
      <Typography className="footer" color="white" variant="body2" fontSize={12} sx={{ mt: 15, mb: 3 }} >
        Made with <i className="fa-solid fa-heart"></i> in React and Material UI
        by Saskia van der Zanden
      </Typography>
      </Grid>
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

export default App;