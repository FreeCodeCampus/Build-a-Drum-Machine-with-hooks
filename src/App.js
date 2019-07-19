import React from "react";
import "./App.css";

const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const Drum = () => {
  return (
    <div id="display" className="container">
      {letters.map((letter, index) =>
        (index + 1) % 3 === 0 ? (
          <>
            <button className="drum-pad" id={letter}>
              {letter}
            </button>
            <div className="break" />
          </>
        ) : (
          <button className="drum-pad" id={letter}>
            {letter}
          </button>
        )
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Drum />
    </div>
  );
}

export default App;
