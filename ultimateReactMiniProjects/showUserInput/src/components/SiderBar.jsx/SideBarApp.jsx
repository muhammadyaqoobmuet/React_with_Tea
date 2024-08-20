import React from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';
import SideBar from './SideBar';
import { AppProvider, useAppContext } from './context/AppContext';


function SideBarApp() {
  const { openSideBar, openModal } = useAppContext();

  return (
    

    <main className='w-full h-screen'>
      <nav className='w-full flex'>
        <button 
          onClick={openSideBar}
          className='hover:rotate-90 transition-all active:-rotate-180'
        >
          <FaBars className='text-2xl m-6' />
        </button>
      </nav>
      <div className='w-full flex justify-center items-center h-[88vh]'>
        <button 
          onClick={openModal}
          className='px-4 bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-500'
        >
          Show Modal
        </button>
      </div>
      <Modal />
      <SideBar />
    </main>

    
  );
}
export default SideBarApp