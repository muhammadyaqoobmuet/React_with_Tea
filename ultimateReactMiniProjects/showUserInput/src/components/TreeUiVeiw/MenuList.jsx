import React, { useEffect } from 'react';
import MenuItem from './MenuItem';

function MenuList({ list = [] }) {
  

  return (
    <div className='space-y-2'>
      {list && list.length ? (
        list.map((listItem) => (
          <MenuItem key={listItem.label} item={listItem} />
        ))
      ) : (
        <p className='text-gray-500 text-center'>No items available</p>
      )}
    </div>
  );
}

export default MenuList;
