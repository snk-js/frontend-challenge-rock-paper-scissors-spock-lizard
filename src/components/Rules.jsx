import RulesImg from "../assets/image-rules-bonus.svg";
import IconClose from "../assets/icon-close.svg";
import { useEffect, useState } from "react";
const Rules = ({ handleClose }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(60);
  }, []);

  return (
    <div className="z-20">
      <div
        onClick={() => handleClose()}
        className={`transition-all ease-in-out min-w-[800px] duration-1000 w-[100vw] z-30 h-[110vh] absolute left-0 top-0 
        opacity-${opacity}  bg-black`}
      ></div>

      <div
        className={`transition-all duration-500 
        opacity-${
          opacity + 40
        } absolute left-[40%] top-[30%] rounded-lg z-40 min-w-fit min-h-min h-auto bg-white px-6 py-6`}
      >
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-gray-700 text-2xl">RULES</span>
          <img
            onClick={handleClose}
            src={IconClose}
            className="h-fit hover:cursor-pointer"
            alt=""
          />
        </div>
        <img src={RulesImg} className="mb-4" alt="" />
      </div>
    </div>
  );
};

export default Rules;
