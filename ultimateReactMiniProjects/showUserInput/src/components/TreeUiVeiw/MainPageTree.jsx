import React, { useEffect } from 'react';
import MenuList from './MenuList';

function MainPageTree({ sideMenuData }) {
  

  return (
    <div className='w-full h-screen bg-gray-200 p-6'>
      <div className='bg-white shadow-md rounded-lg p-4'>
        <MenuList list={sideMenuData} />
      </div>
    </div>
  );
}

export default MainPageTree;
