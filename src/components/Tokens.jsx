import Token from "./Token";

const Tokens = ({ choices, playerChoice, handlePlayerChoice }) => {
  return choices.map((thisChoice, i) => {
    return (
      <Token
        adicionalStyle={`${
          playerChoice.length > 0 && playerChoice !== thisChoice
            ? "transition-all ease-in duration-1000 opacity-0 top-[-40rem]"
            : ""
        }`}
        key={i}
        onClick={() => handlePlayerChoice(i)}
        choice={thisChoice}
        isHovering={playerChoice === thisChoice}
      />
    );
  });
};

export default Tokens;
