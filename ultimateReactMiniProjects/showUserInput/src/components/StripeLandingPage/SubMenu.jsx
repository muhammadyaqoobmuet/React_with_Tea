import React, { useEffect, useRef, useState } from 'react';
import { useStripe } from './stripeContext/stripeContext';

function SubMenu() {
  const { isSubMenuOpen, cordinate, page } = useStripe(); // Correctly destructured `page`
  const container = useRef(null);
  const [col,setCol] = useState('grid-cols-3')
  useEffect(() => {
    setCol('grid-cols-2')
    const subMenu = container.current;
    if (subMenu && cordinate.center && cordinate.bottom) { // Ensure coordinates are valid
      const { center, bottom } = cordinate;
      subMenu.style.left = `${center}px`;
      subMenu.style.top = `${bottom + 10}px`;

      if(page.links.length === 3){
        setCol('grid-cols-3')
      }else if(page.links.length > 3){
        setCol('grid-cols-4')
      }
      }

  }, [cordinate,page.links]);

  return (
    <div
      ref={container}
      className={`${isSubMenuOpen ? 'block' : 'hidden'} submenu absolute transform -translate-x-1/2 z-30 p-8 bg-white shadow-lg rounded-lg transition-all`}
    >
      <h1 className="text-lg font-semibold uppercase tracking-[0.5rem]">{page.page}</h1>
      <div className='bg-gray-900/30 h-[1px] my-1 w-full'></div>
      <div className={`grid ${col}  gap-5 place-content-between items-center`}>
      {
        page.links.map((link,index)=>{
          const {label,url} = link;
          
          const Icon = link.icon;
         
          return <a className='flex item-center gap-4 py-2 px-2' src={url}>
          <Icon className="text-xl text-indigo-600" />
              <p className='font-semibold tracking-wider'>{label}</p>
            </a>
        })
      }

      </div>
      {/* Custom arrow using a pseudo-element */}
      <div
        className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px]
       border-r-transparent border-b-[5px] border-b-white"
      ></div>
    </div>
  );
}

export default SubMenu;
