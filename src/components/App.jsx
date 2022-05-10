import React from "react";
import Main from "./Main";
import { Howler } from "howler";

const App = () => {
  function checkHowlerCtx() {
    console.log("Touch Start began.");
    console.log("This is the Howler ctx state over HERE: " + Howler.ctx.state);
    if (Howler.ctx.state === "suspended") {
        Howler.ctx.resume().then(() => {
            console.log("Howler ctx SHOULD be resumed: " + Howler.ctx.state);
        })
    }
  }
  return (
    <div className="App">
      <Main 
        onTouchStart={checkHowlerCtx}
      />
    </div>
  );
}

export default App;
