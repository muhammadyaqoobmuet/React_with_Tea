import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(){
  return (
    <header className='w-full h-[80px] from-[#202746] to-[#406470] bg-gradient-to-r border-b border-[#cc9a9a8a]'>
        <nav className='flex items-center justify-between px-24'>
            <div className='h-[80px] flex items-center'>
               <Link to="/">
                   <h1 className='text-3xl font-extrabold text-white'>Hunt <span className='text-[#2646fc]'>HUB</span></h1>
               </Link>
            </div>

            <ul className='flex gap-5 items-center'>
              <li>
                <NavLink 
                  to='/' 
                  className={({ isActive }) => 
                    `text-xl font-semibold ${isActive ? 'text-[#222A59] font-extrabold' : 'text-white'}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='about' 
                  className={({ isActive }) => 
                    `text-xl font-semibold ${isActive ? 'text-[#121b4f] font-extrabold' : 'text-white'}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='contact' 
                  className={({ isActive }) => 
                    `text-xl font-semibold ${isActive ? 'text-[#222A59] font-extrabold' : 'text-white'}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='github'>
                  <button className='px-3 py-1 bg-[#222A59] rounded text-xl hover:scale-[1.1] transition-all text-white font-semibold'>Get Started</button>
                </NavLink>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
