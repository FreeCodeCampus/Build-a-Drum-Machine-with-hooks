import React from "react";
import "./App.css";

const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const Drum = () => {
  return (
    <div id="display" className="container">
      {letters.map((letter, index) =>
        (index + 1) % 3 === 0 ? (
          <>
            <div className="button" id={letter}>
              {letter}
            </div>
            <div className="break" />
          </>
        ) : (
          <div className="button" id={letter}>
            {letter}
          </div>
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
