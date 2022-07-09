import React, { useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import { innerTokenStyles, outerTokenStyles, imgStyles } from "../constants";

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

      {choices.map((thisChoice, i) => {
        return (
          <Token
            adicionalStyle={`${
              playerChoice.length > 0 && playerChoice !== thisChoice
                ? "transition-all ease-in duration-1000 opacity-0 top-[-40rem]"
                : ""
            }`}
            key={i}
            onClick={() => handlePlayerChoice(i)}
            choice={thisChoice}
            isHovering={playerChoice === thisChoice}
          />
        );
      })}
      {playerChoice.length > 0 ? (
        <Token isEmptyChoice={true} choice="empty" />
      ) : (
        <></>
      )}
    </div>
  );
};

const Token = (props) => {
  const { choice, isHovering, isEmptyChoice, adicionalStyle } = props;

  const emptyChoice = isEmptyChoice ? "empty-choice" : "token-behavior";
  const isHoveringChoice = isHovering ? "yes" : "no";

  return (
    <div
      clicked={isHoveringChoice}
      {...props}
      className={` ${adicionalStyle} ${emptyChoice} ${outerTokenStyles[choice]} absolute shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full  w-36 h-36`}
    >
      <div
        className={`${innerTokenStyles[choice]} rounded-full absolute top-[1rem] left-[1rem] w-28 h-28`}
      >
        {!isEmptyChoice ? <img alt="token" {...imgStyles[choice]} /> : <></>}
      </div>
    </div>
  );
};

export default Game;
