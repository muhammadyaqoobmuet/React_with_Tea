import React, { useState } from 'react';
import Rules from './Rules';

const RoleDice = ({isRolling,current,rollDice,setScore}) => {
    const [show,setShow] = useState(false);
  return (
    <div>
      <div 
        onClick={rollDice} 
        className={`flex max-w-[220px] mx-auto cursor-pointer justify-center items-center mt-20 ${isRolling ? 'animate-rolling' : ''}`}
      >
        <img 
          width="220px" 
          height="220px"  
          src={`./images/dice/dice_${current}.png`} 
          alt="dice"
        />
      </div>
      <p className='text-center text-[24px] mt-2 font-semibold'>Click On Dice to Roll</p>
      <div className=' w-full flex flex-col justify-center items-center mt-2'>
      <button onClick={()=>setScore(perv=>0)} className=' border-black border-[1px] w-[220px] py-1 font-semibold rounded-md mt-2'>Reset Score</button>
      <button onClick={()=>setShow(!show)} className=' border-black bg-black text-white font-semibold border-[1px] w-[220px] py-1 rounded-md mt-2'>
      {show?'Hide Rules':'Show Rules'}
      </button>
      </div>

     {show &&  <Rules />}
    </div>
  );
};

export default RoleDice;
