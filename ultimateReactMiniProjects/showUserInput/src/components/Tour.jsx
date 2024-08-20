import React, { useState, useContext } from 'react';
import { NotIntrestedContext } from '../context/notIntrested';

function Tour({ id, info, price, name, image }) {
  const [readMore, setReadMore] = useState(false);
  const { deleteTour } = useContext(NotIntrestedContext);

  return (
    <div className='w-full flex justify-center'>
      <article className='w-[90%] max-w-[600px] bg-white rounded-lg shadow-lg overflow-hidden my-10'>
        <img src={image} alt={name} className='w-full h-[300px] object-cover rounded-t-lg' />
        <div className='p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-semibold text-gray-800'>{name}</h1>
            <h2 className='text-xl font-semibold bg-sky-100 text-sky-500'>${price}</h2>
          </div>
          <p className='text-gray-700 mb-4'>
            {readMore ? info : `${info.substr(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)} className='text-xl text-sky-500'>
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <div className='flex justify-center'>
            <button
              onClick={() => deleteTour(id)}
              className='bg-[seagreen] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:tracking-wide hover:-translate-y-2 hover:border-1 hover:border-black transition-all duration-300'>
              Not Interested
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Tour;
