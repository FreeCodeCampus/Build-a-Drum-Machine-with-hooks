import React from "react";
import "./App.css";

const letters = [
  {
    button: "Q",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    button: "W",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    button: "E",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    button: "A",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    button: "S",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    button: "D",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    button: "Z",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    button: "X",
    track: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    button: "C",
    track: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const Drum = () => {
  const sound = e => {
    const av = e.target.querySelector("audio");
    // console.log(e.target, e.target.querySelector("audio").getAttribute("id"));
    av.play();
  };

  return (
    <div id="display" className="container">
      {letters.map((letter, index) =>
        (index + 1) % 3 === 0 ? (
          <>
            <button
              className="drum-pad"
              id={`cont-${letter["button"]}`}
              onClick={e => sound(e)}
            >
              {console.log(letter)}
              <audio
                className="clip"
                id={letter["button"]}
                src={letter.track}
              />
              {letter.button}
            </button>
            <div className="break" />
          </>
        ) : (
          <button
            className="drum-pad"
            id={`cont-${letter["button"]}`}
            onClick={e => sound(e)}
          >
            <audio className="clip" id={letter["button"]} src={letter.track} />
            {letter.button}
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
