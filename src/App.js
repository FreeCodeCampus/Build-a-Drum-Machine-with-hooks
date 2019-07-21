import React from "react";
import "./App.css";

const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const Drum = () => {
  const sound = e => {
    const au = document.getElementById("E");
    console.log(au);
    au.play();
  };

  return (
    <div id="display" className="container">
      {letters.map((letter, index) =>
        (index + 1) % 3 === 0 ? (
          <>
            <button
              className="drum-pad"
              id={`cont-${letter}`}
              onClick={() => sound()}
            >
              {console.log(letter)}
              <audio
                className="clip"
                id={letter}
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
              {letter}
            </button>
            <div className="break" />
          </>
        ) : (
          <button
            className="drum-pad"
            id={`cont-${letter}`}
            onClick={() => sound()}
          >
            <audio
              className="clip"
              id={letter}
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            />
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
