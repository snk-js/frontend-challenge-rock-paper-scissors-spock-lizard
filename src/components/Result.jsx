const Result = ({ winner }) => {
  return (
    <div
      className={`${
        winner === "draw" ? "left-10" : ""
      } flex flex-col min-w-fit h-6 absolute lg:top-[4rem] lg:left-[35%] z-50 top:[10rem] mt-24`}
    >
      <span className="my-1 text-6xl lg:text-3xl font-bold text-white">
        {winner === "player"
          ? "YOU WIN"
          : winner === "draw"
          ? "DRAW"
          : "YOU LOSE"}
      </span>
      <button className="text-bold text-blue-900 lg:text-xs text-2xl justify-center items-center bg-white rounded-md py-2">
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Result;
