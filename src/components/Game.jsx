import React, { useEffect, useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import Tokens from "./Tokens";
import Token from "./Token";
import "./styles.css";

const ruleLogic = {
  scissors: ["lizard", "paper"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
  rock: ["scissors", "lizard"],
  paper: ["spock", "rock"],
};
const Game = ({ handleShowPickedTitles }) => {
  const choices = ["scissors", "lizard", "spock", "rock", "paper"];

  // computer or player
  const [result, setResult] = useState({
    player: "",
    computer: "",
  });

  const [winner, setWinner] = useState("");

  const [playerChoice, setPlayerChoice] = useState("");

  useEffect(() => {
    console.log(result);
    if (result.player.length > 0 && result.computer.length > 0) {
      if (result.player === result.computer) {
        setWinner("draw");
      }
      if (ruleLogic[result.player].includes(result.computer)) {
        setWinner("player");
      } else {
        setWinner("computer");
      }
    }
  }, [result, setResult]);

  useEffect(() => {
    console.log("w", winner);
  }, [winner]);

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
        setResult={setResult}
        winner={winner}
        choices={choices}
        playerChoice={playerChoice}
        handlePlayerChoice={handlePlayerChoice}
      />
      {playerChoice.length > 0 ? (
        <Token
          playerChoice={playerChoice}
          setResult={setResult}
          isEmptyChoice={true}
          choice="empty"
          winner={winner}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;
