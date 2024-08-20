import React, { useState } from 'react';

const NumberSelector = ({selectedNumber,setSelectedNumber,error}) => {
  const numArr = [1, 2, 3, 4, 5, 6];

  

  return (
    
    <div className="flex flex-col">
    <p className='text-[red] absolute  bg-black  sm:px-5 rounded-lg -top-12 right-0 font-bold text-lg'>{error}</p>
      <div className=" mx-auto max-w-[60vw] flex  items-center gap-1">
        {numArr.map((val, ind) => (
          <div
            onClick={() => setSelectedNumber(val)}
            key={ind}
            className={` w-[60px] h-[40px] flex-wrap flex items-center
             sm:w-[50px] ${selectedNumber === val ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer flex items-center justify-center text-xl h-[50px] border-black border-2`}
          >
            {val}
          </div>
        ))}
      </div>
      <h2 className=" text-center sm:self-end text-xl mt-2 font-semibold">Select Number</h2>
    </div>
  );
};

export default NumberSelector;
