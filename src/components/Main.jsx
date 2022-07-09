import React from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";

const Main = () => {
  return (
    <Background>
      <div className="container mx-auto my-[3rem] min-h-screen flex flex-col items-center justify-start">
        <ScoreHeader />
        <Game />
      </div>
    </Background>
  );
};

export default Main;
