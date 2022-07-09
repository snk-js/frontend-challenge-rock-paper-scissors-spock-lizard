import React, { useState } from "react";
import Game from "./Game";
import ScoreHeader from "./ScoreHeader";
import Background from "./Background";
import PickedChoice from "./PickedChoice";
import RulesButton from "./RulesButton";

const Main = () => {
  const [showPickedTitle, setShowPickedTitle] = useState(false);

  const [showRules, setShowRules] = useState(false);

  const handleShowPickedTitles = () => {
    setShowPickedTitle(!showPickedTitle);
  };

  const handleToggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <Background>
      <div className="container mx-auto my-[3rem] min-h-screen flex flex-col items-center justify-start">
        <ScoreHeader />
        {showPickedTitle ? <PickedChoice /> : <></>}
        <Game handleShowPickedTitles={handleShowPickedTitles} />
        <RulesButton handle={handleToggleRules} />
      </div>
    </Background>
  );
};

export default Main;
