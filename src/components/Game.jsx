import React, { useEffect, useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import Tokens from "./Tokens";
import Token from "./Token";
import "./styles.css";

const Game = ({ handleShowPickedTitles }) => {
  const choices = ["scissors", "lizard", "spock", "rock", "paper"];

  const [playerChoice, setPlayerChoice] = useState("");

  const handlePlayerChoice = (choice) => {
    if (playerChoice === choices[choice]) {
      handleShowPickedTitles();
      setPlayerChoice("");
    } else {
      handleShowPickedTitles();
      setPlayerChoice(choices[choice]);
    }
  };

  return (
    <div className="relative mx-10 mt-[6rem]">
      <img
        src={Pentagon}
        alt="pentagon holding all choices"
        className={`${
          playerChoice.length > 0 ? "transition-opacity opacity-0" : ""
        }`}
      />

      <Tokens
        choices={choices}
        playerChoice={playerChoice}
        handlePlayerChoice={handlePlayerChoice}
      />
      {playerChoice.length > 0 ? (
        <Token isEmptyChoice={true} choice="empty" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;
