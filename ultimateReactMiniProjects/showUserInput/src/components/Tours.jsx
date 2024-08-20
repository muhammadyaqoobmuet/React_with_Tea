import React from 'react';
import Tour from './Tour';
import { NotIntrestedContext } from '../context/notIntrested';

function Tours({ tours, deleteTour }) {
  return (
    <NotIntrestedContext.Provider value={{ deleteTour }}>
      <div className='max-w-[1080px] mx-auto'>
        <header className='mt-20'>
          <h1 className='text-center tracking-wider py-2 font-bold text-3xl'>Tours</h1>
          <div className='w-[50px] mx-auto h-[5px] bg-sky-600'></div>
        </header>
        <div className='w-full h-screen'>
          {tours.map((tour) => <Tour key={tour.id} {...tour} />)}
        </div>
      </div>
    </NotIntrestedContext.Provider>
  );
}

export default Tours;
