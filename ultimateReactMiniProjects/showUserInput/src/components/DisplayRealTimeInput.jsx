import React, { useState } from 'react';

function DisplayRealTimeInput() {
  const [input, setInput] = useState("");
  
  return (
    <div className='w-screen flex items-center justify-center h-screen '>
      <div className='h-[50vh] w-1/2 bg-[gray] px-10 rounded-md '>
        <input
          className='bg-[#414141] self-center my-4 border border-white rounded mx-4 mt-2 h-1/6 text-center w-1/2'
          onChange={(e) => setInput(e.target.value)}
        />
        <h1 className='text-2xl text-white font-bold my-4'>INPUT {input}</h1>
      </div>
    </div>
  );
}

export default DisplayRealTimeInput;
