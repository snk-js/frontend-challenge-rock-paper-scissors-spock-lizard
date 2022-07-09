import React, { useState } from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";
import PickedChoice from "./PickedChoice";

const Main = () => {
  const [showPickedTitle, setShowPickedTitle] = useState(false);

  const handleShowPickedTitles = () => {
    setShowPickedTitle(!showPickedTitle);
  };

  return (
    <Background>
      <div className="container mx-auto my-[3rem] min-h-screen flex flex-col items-center justify-start">
        <ScoreHeader />
        {showPickedTitle ? <PickedChoice /> : <></>}
        <Game handleShowPickedTitles={handleShowPickedTitles} />
      </div>
    </Background>
  );
};

export default Main;
