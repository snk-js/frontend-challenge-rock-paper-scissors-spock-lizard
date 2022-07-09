import { useContext } from "react";
import { GameContext } from "../gameContext";

const PlayButton = () => {
  const { toggleShuffle } = useContext(GameContext);

  return (
    <button
      onClick={() => toggleShuffle(true)}
      className="transition-all 
      fixed ease-in-out
      delay-150
      duration-75
      hover:shadow-md
      hover:shadow-white
      hover:scale-110
      bottom-[10%]
      right-[47%]
      py-2
      px-10
      rounded-md
      text-white border-white border-2 flex justify-center items-center"
    >
      PLAY
    </button>
  );
};

export default PlayButton;
