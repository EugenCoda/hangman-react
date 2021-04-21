import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  selectedWord,
  wrongLetters,
  correctLetters,
  setPlayable,
  playAgain,
}) => {
  let check = checkWin(selectedWord, wrongLetters, correctLetters);
  let playable = true;
  let message = "";
  let revealWordMessage = "";

  if (check === "won") {
    message = "You won!";
    playable = false;
  } else if (check === "lost") {
    message = "You lost!";
    revealWordMessage = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={message !== "" ? { display: "flex" } : {}}
    >
      <h2>{message}</h2>
      <h3>{revealWordMessage}</h3>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Popup;
