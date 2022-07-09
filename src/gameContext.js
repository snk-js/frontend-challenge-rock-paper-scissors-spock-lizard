import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [play, setPlay] = useState(false);

  const toggleShuffle = (isShuffle) => {
    isShuffle ? setPlay(true) : setPlay(false);
  };

  return (
    <GameContext.Provider value={{ toggleShuffle, play }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContextProvider, GameContext };
