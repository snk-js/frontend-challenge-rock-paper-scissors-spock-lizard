const RulesButton = ({ handleOpen }) => {
  return (
    <button
      onClick={handleOpen}
      className="transition-all fixed ease-in-out delay-150 duration-75 hover:shadow-md hover:shadow-white hover: hover:scale-110 bottom-[10%] right-[10%] py-2 px-10 rounded-md text-white border-white border-2 flex justify-center items-center"
    >
      RULES
    </button>
  );
};

export default RulesButton;
