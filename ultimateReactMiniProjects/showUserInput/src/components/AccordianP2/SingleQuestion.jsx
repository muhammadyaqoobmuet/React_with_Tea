import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
function SingleQuestion({ question, answer }) {
  const [vState, setVState] = useState(false);
  return (
    <div className="w-full mt-2 hover:bg-gray-300 transition-all hover:scale-x-105  border-2 border-black/20 rounded-md bg-white">
      <div className=" flex justify-between py-3 my-2 px-10">
        <div>
          <h1 className="text-xl font-semibold">{question}</h1>
        </div>
        <div onClick={() => setVState(!vState)} className="cursor-pointer">
          <h1 className="bg-gray-400 rounded-full p-2 ">
            {vState ? (
              <FaMinus className=" rounded-full text-lg text-black " />
            ) : (
              <FaPlus className=" rounded-full text-lg text-black " />
            )}
          </h1>
        </div>
      </div>

      <div className="px-10 ">
        {vState && (
          <p className="py-3 text-lg  leading-snug tracking-tight">{answer}</p>
        )}
      </div>
    </div>
  );
}

export default SingleQuestion;
