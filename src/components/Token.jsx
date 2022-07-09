import { innerTokenStyles, outerTokenStyles, imgStyles } from "../constants";

const Token = (props) => {
  const { choice, isHovering, isEmptyChoice, adicionalStyle } = props;

  const emptyChoice = isEmptyChoice ? "empty-choice" : "token-behavior";
  const isHoveringChoice = isHovering ? "yes" : "no";

  return (
    <div
      clicked={isHoveringChoice}
      {...props}
      className={` ${adicionalStyle} ${emptyChoice} ${outerTokenStyles[choice]} absolute shadow-2xl drop-shadow-2xl shadow-slate-900 rounded-full  w-36 h-36`}
    >
      <div
        className={`${innerTokenStyles[choice]} rounded-full absolute top-[1rem] left-[1rem] w-28 h-28`}
      >
        {!isEmptyChoice ? <img alt="token" {...imgStyles[choice]} /> : <></>}
      </div>
    </div>
  );
};

export default Token;
