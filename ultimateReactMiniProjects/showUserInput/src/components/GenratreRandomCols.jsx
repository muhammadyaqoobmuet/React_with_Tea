import React, { useState } from "react";

const HEX = "hex";
const RGB = "RGB";

function GenerateRandomColors() {

  const [typeOfColor, setTypeOfColor] = useState(HEX);
  const [color, setColor] = useState("#000000");

  const generateHexColor = () => {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
  };

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const generateColor = () => {
    if (typeOfColor === HEX) {
      generateHexColor();
    } else if (typeOfColor === RGB) {
      generateRgbColor();
    }
  };

  return (
    <div className="w-full h-screen relative" style={{ background: color }}>
      <div className="max-w-[100%] mx-auto flex justify-center py-4">
        <button
          onClick={() => setTypeOfColor(HEX)}
          className={`text-black px-4
           rounded-lg hover:tracking-widest transition-all 
           hover:grow-[0.1] hover:scale-95 py-2 mx-2 ${typeOfColor === HEX ? 'bg-white text-black' : 'bg-sky-400 text-black'}`}
        >
          Create hex color
        </button>
        <button
          onClick={() => setTypeOfColor(RGB)}
          className={`text-black px-4 rounded-lg hover:tracking-widest transition-all hover:grow-[0.1] hover:scale-95 py-2 mx-2 ${typeOfColor === RGB ? 'bg-white text-black' : 'bg-sky-400 text-black'}`}
        >
          Create RGB color
        </button>
        <button
          onClick={generateColor}
          className="text-black px-4 rounded-lg hover:tracking-widest transition-all hover:grow-[0.1] hover:scale-95 py-2 bg-sky-400"
        >
          Generate Color
        </button>
      </div>

      <h1
        className="text-center text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-extrabold tracking-wide text-5xl"
      >
        {typeOfColor}: {color}
      </h1>
    </div>
  );
}

export default GenerateRandomColors;
