import Scissors from "assets/icon-scissors.svg";
import Lizard from "assets/icon-lizard.svg";
import Spock from "assets/icon-spock.svg";
import Paper from "assets/icon-paper.svg";
import Rock from "assets/icon-rock.svg";

export const outerTokenStyles = {
  scissors:
    "bg-gradient-to-r from-scissors-from to-scissors-to  top-[-3rem] left-[6rem]",
  lizard:
    "bg-gradient-to-r from-lizard-from to-lizard-to top-[14.5rem] left-[-.75rem]",
  spock: "bg-gradient-to-r from-cyan-from to-cyan-to top-[3rem] left-[-5rem]",
  rock: "bg-gradient-to-r from-rock-from to-rock-to left-[14rem] top-[14.5rem]",
  paper: "bg-gradient-to-r from-paper-from to-paper-to left-[17rem] top-[3rem]",
  empty: "empty-choice top-[-3rem] left-[6rem]",
};

export const innerTokenStyles = {
  scissors: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
  lizard: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
  spock: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
  rock: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
  paper: "shadow-md shadow-slate-900 bg-[#ebeaeb]",
  empty: " bg-black opacity-20 absolute top-[-3rem] left-[6rem]",
};

export const imgStyles = {
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
