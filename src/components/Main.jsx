import React, { useState } from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";
import RulesButton from "./RulesButton";
import Rules from "./Rules";
import { useLocalStorage } from "../utils/useLocalStorage";

const Main = () => {
  const [showPickedTitle, setShowPickedTitle] = useState(false);

  const [score, setScore] = useLocalStorage("score", 0);
  const [showRules, setShowRules] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");

  const handleSetScore = () => {
    setScore(score + 1);
  };

  const handleShowPickedTitles = () => {
    setShowPickedTitle(!showPickedTitle);
  };

  const playAgain = () => {
    handleShowPickedTitles();
    setPlayerChoice("");
  };

  const handleCloseRules = () => {
    setShowRules(false);
  };
  const handleOpenRules = () => {
    setShowRules(true);
  };

  return (
    <Background>
      <div className="container mx-auto my-[5rem] min-h-screen flex flex-col items-center justify-start">
        {showRules ? <Rules handleClose={handleCloseRules} /> : <></>}
        <ScoreHeader score={score} />
        <Game
          setPlayerChoice={setPlayerChoice}
          playerChoice={playerChoice}
          handleSetScore={handleSetScore}
          handleShowPickedTitles={handleShowPickedTitles}
          playAgain={playAgain}
        />
        <RulesButton handleOpen={handleOpenRules} />
      </div>
    </Background>
  );
};

export default Main;
