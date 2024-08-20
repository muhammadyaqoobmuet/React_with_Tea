import React, { useState } from "react";

function ToggleSwitch() {
  const [halat , sethalat] = useState(false);
  function handler(){
    sethalat(!halat);
  }
  return (
    <>
      <div className="grid place-content-center w-[100vw] h-screen bg-[#d1d1d1]">
        <div className="w-[50vw] h-80 bg-slate-700 rounded-md shadow-md shadow-black">
            <h1 className="text-white text-center py-4 font-semibold text-3xl ">Toggle Switch</h1>
        <div className="w-full flex items-center gap-3
        px-4 ">
        <label className="text-white font-semibold text-2xl" htmlFor="check">Click Here</label>
            <input onChange={handler} id="check" type="checkbox" className="w-[30px] h-[30px] checked:border-pink-700" />
            
        </div>
        <h1 className="text-2xl font-semibold text-white px-4 py-4">INPUT:{halat ? "ON":"OFF"}</h1>

        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
