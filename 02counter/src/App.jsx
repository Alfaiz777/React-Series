import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const min = 0;
  const max = 20;

  // let counter = 5;

  const addValue = () => {
    if (counter < max) {
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);

      // setCounter((prevCounter) => prevCounter + 1);

      // setCounter((prevCounter) => prevCounter + 1);
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue} disabled={counter === max}>
        Add value {counter}
      </button>{" "}
      <br></br>
      <button onClick={removeValue} disabled={counter === min}>
        Remove value {counter}
      </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

// make a method where when i click on remove value it does not go to negative and when i click on add value it goes till 20 only
