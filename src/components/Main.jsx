import React, { useState } from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";
import PickedChoice from "./PickedChoice";
import RulesButton from "./RulesButton";
import Rules from "./Rules";
import PlayButton from "./PlayButton";

const Main = () => {
  const [showPickedTitle, setShowPickedTitle] = useState(false);

  const [showRules, setShowRules] = useState(false);

  const handleShowPickedTitles = () => {
    setShowPickedTitle(!showPickedTitle);
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
        <ScoreHeader />
        {showPickedTitle ? <PickedChoice /> : <></>}
        <Game handleShowPickedTitles={handleShowPickedTitles} />
        <RulesButton handleOpen={handleOpenRules} />
        <PlayButton />
      </div>
    </Background>
  );
};

export default Main;
