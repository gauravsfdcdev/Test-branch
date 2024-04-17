import { useState } from "react";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(15)

  const addValue = () => {
    
    counter= counter + 1
    setCounter(counter);
    console.log("clicked",counter);
    
  };

  const removeValue = ()=>{
    counter= counter - 1
    setCounter(counter);
    console.log("clicked",counter);
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value : {counter}</h2>

      <button type="button" onClick={addValue}>
        Add Value
      </button>
      <button type="button"
      onClick={removeValue}
      >Remove Value</button>
    </>
  );
}

export default App;
