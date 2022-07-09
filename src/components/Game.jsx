import React, { useState } from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import Scissors from "../assets/icon-scissors.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";

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

  const outerTokenStyles = {
    scissors:
      "bg-gradient-to-r from-scissors-from to-scissors-to  top-[-3rem] left-[6rem]",
    lizard:
      "bg-gradient-to-r from-lizard-from to-lizard-to top-[14.5rem] left-[-.75rem]",
    spock: "bg-gradient-to-r from-cyan-from to-cyan-to top-[3rem] left-[-5rem]",
    rock: "bg-gradient-to-r from-rock-from to-rock-to left-[14rem] top-[14.5rem]",
    paper:
      "bg-gradient-to-r from-paper-from to-paper-to left-[17rem] top-[3rem]",
    empty: "empty-choice top-[-3rem] left-[6rem]",
  };

  const innerTokenStyles = {
    scissors: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
    lizard: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
    spock: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
    rock: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
    paper: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
    empty: "bg-black opacity-20 absolute top-[-3rem] left-[6rem]",
  };

  const imgStyles = {
    scissors: {
      className: "absolute top-[1.5rem] left-[2rem]",
      alt: "scissors",
      src: Scissors,
    },
    lizard: {
      className: "absolute top-[1.5rem] left-[1.5rem]",
      alt: "lizard",
      src: Lizard,
    },
    spock: {
      className: "absolute top-[1.5rem] left-[2.5rem]",
      alt: "spock",
      src: Spock,
    },
    rock: {
      className: "absolute top-[2rem] left-[2rem]",
      alt: "rock",
      src: Rock,
    },
    paper: {
      className: "absolute top-[2rem] left-[2rem]",
      alt: "paper",
      src: Paper,
    },
  };

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
