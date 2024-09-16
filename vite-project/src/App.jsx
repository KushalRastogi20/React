import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>First hook {counter}</h1>
      <button onClick={addValue}>Add value{counter}</button>
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  );
}

export default App;
