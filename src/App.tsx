import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure lancie?",
  "Really sure?",
  "Pookie please",
  "You hate me..",
  "I'm gonna cry",
  "You're breaking my heart",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://gifdb.com/images/high/mocha-bear-love-milk-give-lots-kisses-ytma02147lcp77zk.gif"
          />
          <div className="text">
            Te amo, mi amor!! Have the best day ever at work papi. - Ninette
            Entsuah
          </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div> Lance Jojo Entsuah, will you be my valentine?</div>
          <div>
            <button
              className="yesbutton"
              onClick={() => setYesPressed(true)}
              style={{ fontSize: yesButtonSize }}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="nobutton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
