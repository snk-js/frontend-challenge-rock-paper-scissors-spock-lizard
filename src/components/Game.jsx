import React from "react";
import Pentagon from "../assets/bg-pentagon.svg";
import Scissors from "../assets/icon-scissors.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import Paper from "../assets/icon-paper.svg";
import Rock from "../assets/icon-rock.svg";

const Game = () => {
  return (
    <div className="relative h-54 w-54">
      <img src={Pentagon} alt="pentagon holding all choices" />

      <ScissorsButton />

      <LizardButton />

      <SpockButton />

      <RockButton />

      <PaperButton />
    </div>
  );
};

export const ScissorsButton = ({ handleSetScore }) => {
  return (
    <div
      onClick={handleSetScore}
      className={`customHover absolute duration-300 top-[-3rem] shadow-2xl drop-shadow-2xl shadow-slate-900 left-[6rem] rounded-full bg-gradient-to-r from-scissors-from to-scissors-to w-36 h-36`}
    >
      <div className="rounded-full absolute top-[1rem] shadow-md shadow-slate-900 left-[1rem] bg-[#ebeaeb] w-28 h-28">
        <img
          src={Scissors}
          alt="scissors choice button"
          className="absolute top-[1.5rem] left-[2rem]"
        />
      </div>
    </div>
  );
};

const LizardButton = () => {
  return (
    <div className="customHover absolute bottom-[-4rem] left-[-.75rem] shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full bg-gradient-to-r from-lizard-from to-lizard-to w-36 h-36">
      <div className="rounded-full absolute top-[1rem] shadow-md shadow-slate-900 left-[1rem] bg-[#ebeaeb] w-28 h-28">
        <img
          src={Lizard}
          alt="lizard choice button"
          className="absolute top-[1.5rem] left-[1.5rem]"
        />
      </div>
    </div>
  );
};

const SpockButton = () => {
  return (
    <div className="customHover absolute top-[3rem] left-[-5rem] shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full bg-gradient-to-r from-cyan-from to-cyan-to w-36 h-36">
      <div className="rounded-full absolute top-[1rem] shadow-md shadow-slate-900 left-[1rem] bg-[#ebeaeb] w-28 h-28">
        <img
          src={Spock}
          alt="spock choice button"
          className="absolute top-[1.5rem] left-[2.5rem]"
        />
      </div>
    </div>
  );
};

const RockButton = ({ className }) => {
  return (
    <div className="customHover absolute right-[-1.5rem] bottom-[-4rem] shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full bg-gradient-to-r from-rock-from to-rock-to w-36 h-36">
      <div className="rounded-full absolute top-[1rem] shadow-md shadow-slate-900 left-[1rem] bg-[#ebeaeb] w-28 h-28">
        <img
          src={Rock}
          alt="rock choice button"
          className="absolute top-[2rem] left-[2rem]"
        />
      </div>
    </div>
  );
};

const PaperButton = ({ className }) => {
  return (
    <div className="customHover absolute right-[-5rem] top-[3rem] shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full bg-gradient-to-r from-paper-from to-paper-to w-36 h-36">
      <div className="rounded-full absolute top-[1rem] shadow-md shadow-slate-900 left-[1rem] bg-[#ebeaeb] w-28 h-28">
        <img
          src={Paper}
          alt="paper choice button"
          className="absolute top-[2rem] left-[2rem]"
        />
      </div>
    </div>
  );
};

export default Game;
