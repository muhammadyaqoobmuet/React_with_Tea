import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useAppContext } from './context/AppContext';

function Modal() {
  const { modal, closeModal } = useAppContext();

  return (
    <div className={`flex ${modal ? 'flex  ' : 'hidden '}  justify-center w-full h-screen z-10 bg-black/40 items-center absolute top-0 left-0`}>
      <div className='w-[550px] rounded-lg h-[250px] z-20 bg-white'>
        <div className='w-full flex justify-between items-center px-4 py-3'>
          <h3>Modal</h3>
          <button onClick={closeModal}>
            <FaWindowClose className='text-lg hover:text-2xl transition-all' />
          </button>
        </div>
        <hr className='w-full h-[1px] bg-black/20' />
        <div className='max-w-[96%] mx-auto mt-3'>
          <p>Lorem Ipsum is simply the dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='flex items-center mt-3 justify-evenly px-6'>
          <button className='px-4 py-1 font-medium hover:tracking-widest transition-all hover:scale-125 bg-[royalblue] text-white rounded-md'>Ok</button>
          <button onClick={closeModal} className='px-4 py-1 font-medium hover:tracking-widest transition-all hover:scale-125 bg-[red] text-white rounded-md'>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
