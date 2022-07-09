import { innerTokenStyles, outerTokenStyles, imgStyles } from "../constants";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GameContext } from "../gameContext";

const Token = (props) => {
  const {
    setResult,
    choice,
    isHovering,
    isEmptyChoice,
    adicionalStyle,
    winner,
    playerChoice,
  } = props;
  const choices = ["scissors", "lizard", "spock", "rock", "paper"];

  const [isEmpty, setIsEmpty] = useState(isEmptyChoice);
  const [choiceState, setChoiceState] = useState(choice);
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    if (playerChoice.length > 0 && choiceState !== "empty") {
      setResult({
        player: playerChoice,
        computer: choiceState,
      });
    }
  }, [hasResult]);

  const { play } = useContext(GameContext);

  const emptyChoice = isEmptyChoice ? "empty-choice" : "token-behavior";
  const isHoveringChoice = isHovering ? "yes" : "no";

  useEffect(() => {
    if (isEmptyChoice && play) {
      setIsEmpty(true);
      for (let i = 0; i < choices.length; i++) {
        setTimeout(() => {
          if (i === choices.length - 1) {
            console.log(i, "puts");
            setHasResult(true);
          }

          setChoiceState(
            choices[Math.floor(Math.random() * choices.length) % choices.length]
          );
        }, i * 100);
      }
    }
  }, [play]);

  return (
    <div
      clicked={isHoveringChoice}
      winner={winner}
      {...props}
      className={` token ${adicionalStyle} ${emptyChoice} ${outerTokenStyles[choiceState]} absolute shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full  w-36 h-36`}
    >
      <div
        className={`${innerTokenStyles[choiceState]} rounded-full absolute top-[1rem] left-[1rem] w-28 h-28`}
      >
        <TokenImage
          isEmptyChoice={isEmpty}
          choiceState={choiceState}
          play={play}
        />
      </div>
    </div>
  );
};

const TokenImage = ({ isEmptyChoice, choiceState, play }) => {
  if (!isEmptyChoice) {
    return <img alt="token" {...imgStyles[choiceState]} />;
  } else {
    if (play) {
      return <img alt="token" {...imgStyles[choiceState]} />;
    } else {
      return <></>;
    }
  }
};

export default Token;
