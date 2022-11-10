import React, { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import "normalize.css";
import Button from "./components/Button/Button";

function App() {
  const [circles, setCircles] = useState([]);
  /*
  [{
    clientX,
    clientY,
    backgroundColor,
  }]
  */
  return (
    <div style={{ position: "relative" }}>
      <Button setCircles={setCircles}>Clear Canvas</Button>
      <Canvas circles={circles} setCircles={setCircles} />
    </div>
  );
}

export default App;
