import React, { useEffect, useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import Tokens from "./Tokens";
import Token from "./Token";
import "./styles.css";
import { useContext } from "react";
import { GameContext } from "../gameContext";
import Result from "./Result";

const ruleLogic = {
  scissors: ["lizard", "paper"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
  rock: ["scissors", "lizard"],
  paper: ["spock", "rock"],
};
const Game = ({ handleShowPickedTitles, handleSetScore }) => {
  const { toggleShuffle } = useContext(GameContext);
  const choices = ["scissors", "lizard", "spock", "rock", "paper"];

  const [reset, setReset] = useState(false);
  // computer or player
  const [result, setResult] = useState({
    player: "",
    computer: "",
  });

  const [winner, setWinner] = useState("");

  const [playerChoice, setPlayerChoice] = useState("");

  useEffect(() => {
    if (!playerChoice) {
      setWinner("");
    }
  }, [playerChoice]);

  useEffect(() => {
    if (result.player.length > 0 && result.computer.length > 0) {
      if (result.player === result.computer) {
        setWinner("draw");
        return;
      }

      if (ruleLogic[result.player].includes(result.computer)) {
        setWinner("player");
      } else {
        setWinner("computer");
      }
    } else {
      setWinner("");
    }
  }, [result, setResult]);

  useEffect(() => {
    if (winner === "player") handleSetScore();
  }, [winner]);

  const handlePlayerChoice = (choice) => {
    setTimeout(() => {
      toggleShuffle(true);
    }, 1000);
    if (playerChoice === choices[choice]) {
      handleShowPickedTitles();
      setPlayerChoice("");
    } else {
      handleShowPickedTitles();
      setPlayerChoice(choices[choice]);
    }
  };

  return (
    <div className={`relative mx-10  mt-[6rem] ${playerChoice && "mt-0"}`}>
      <img
        src={Pentagon}
        alt="pentagon holding all choices"
        className={`${
          playerChoice.length > 0 ? "transition-opacity opacity-0" : ""
        }`}
      />

      <div className="flex flex-row">
        <Tokens
          reset={reset}
          setResult={setResult}
          winner={winner}
          choices={choices}
          playerChoice={playerChoice}
          handlePlayerChoice={handlePlayerChoice}
        />
        {winner.length > 0 ? <Result winner={winner} /> : <></>}
        {playerChoice.length > 0 ? (
          <Token
            reset={reset}
            playerChoice={playerChoice}
            setResult={setResult}
            isEmptyChoice={true}
            choice="empty"
            winner={winner}
            className=""
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Game;
