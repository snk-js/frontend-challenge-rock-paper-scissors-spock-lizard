import React from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";

const Main = () => {
  return (
    <Background>
      <div className="container mx-auto h-5/6 flex flex-col items-center justify-around">
        <ScoreHeader />
        <Game />
      </div>
    </Background>
  );
};

export default Main;
