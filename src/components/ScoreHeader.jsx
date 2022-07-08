import React from "react";
import TitleSvg from "../assets/logo-bonus.svg";

const ScoreHeader = ({ score }) => {
  return (
    <div className="h-30 w-3/4 py-4 px-10 flex justify-between min-w-fit border-4 rounded-3xl border-neutral-500">
      <img src={TitleSvg} className="mb-1" alt="title svg" />
      <div className="bg-white min-w-min rounded-md h-auto w-1/5 px-2">
        <div className="flex flex-col items-center min-w-max justify-evenly h-full">
          <div className="tracking-widest text-blue-900">SCORE</div>
          <div className="text-6xl font-bold text-gray-700">{score ?? 0}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreHeader;
