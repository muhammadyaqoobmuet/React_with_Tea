import React, { useState } from 'react';
import MenuList from './MenuList';

function MenuItem({ item }) {
  const [dispCurrChild, setDispCurrChild] = useState({});

  const handleToggle = () => {
    setDispCurrChild(prevState => ({
      ...prevState,
      [item.label]: !prevState[item.label]
    }));
  };

  return (
    <div className='border-b border-gray-200'>
      <div className='flex items-center justify-between py-2 px-4 hover:bg-gray-100 transition'>
        <h1 className='text-lg font-medium text-gray-800'>{item.label}</h1>
        {item.children && item.children.length > 0 && (
          <button
            onClick={handleToggle}
            className='text-blue-600 hover:text-blue-800 transition text-2xl'
          >
            {dispCurrChild[item.label] ? '−' : '+'}
          </button>
        )}
      </div>
      {item.children && item.children.length > 0 && dispCurrChild[item.label] && (
        <MenuList list={item.children} />
      )}
    </div>
  );
}

export default MenuItem;
