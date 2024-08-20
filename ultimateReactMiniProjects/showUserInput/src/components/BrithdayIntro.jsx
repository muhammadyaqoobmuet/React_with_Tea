import React, { useEffect, useState, useCallback } from 'react';

const data = [
  {
    fname: "Jack John",
    age: 30
  },
  {
    fname: "John Idea",
    age: 20
  },
  {
    fname: "Smith",
    age: 37
  },
  {
    fname: "Sharda Khapa",
    age: 50
  }
];

function BrithdayIntro() {

  const [userBday, setUserBday] = useState([]);

  useEffect(() => {
    setUserBday(data);
    
  }, []);

  const clearAll = useCallback(() => {
    setUserBday([]);
    setBrithdayCount(0);
  }, []);

  console.log(userBday);

  return (
    <div className='w-full h-screen relative from-pink-600 to-pink-300 bg-gradient-to-t'>
      <div className='absolute flex flex-col w-[30vw] min-h-[90vh] bg-white/90 rounded-lg shadow-black shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='pt-6 '>
          <h1 className='text-3xl font-bold text-center '>Today's Birthday Count: {userBday.length}</h1>
        </div>
        <div className='w-full'>
          {userBday.length === 0 ? <h1 className='text-2xl text-pink-950 font-extrabold tracking-wider mt-10 px-10'>No Brithday for Today</h1> : userBday.map((person, index) => (
            <div key={index} className='flex px-2 pt-6 my-2'>
              <div className='w-[50px] h-[50px] bg-red-600 mx-2 rounded-full'></div>
              <div className='flex h-[70px] flex-col items-center justify-around'>
                <h1 className='text-2xl tracking-wide font-semibold'>{person.fname}</h1>
                <p className='font-medium self-start'>{person.age} years</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className='w-[80%] self-center absolute bottom-2 py-2 rounded-lg text-xl font-white hover:tracking-wider hover:scale-[1.1] transition-all font-bold bg-pink-500'
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default BrithdayIntro;
