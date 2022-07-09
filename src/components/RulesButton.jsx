const RulesButton = ({ handle }) => {
  return (
    <button
      onClick={handle}
      className="transition-all ease-in-out delay-150 duration-75 hover:shadow-md hover:shadow-white hover: hover:scale-110 absolute bottom-0 right-0 m-10 py-2 px-10 rounded-md text-white border-white border-2 flex justify-center items-center"
    >
      RULES
    </button>
  );
};

export default RulesButton;
