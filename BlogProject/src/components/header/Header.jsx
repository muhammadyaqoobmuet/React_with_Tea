import React from 'react';
import Logout from './Logout';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus }
  ];

  return (
    <header className='py-3 shadow  '>
      
        <nav className='flex items-center max-w-[1550px] mx-auto '>
          <div className='mr-4'>
            <Link to='/'>
             <h1 className='text-2xl font-semibold'>LOGO</h1>
            </Link>
          </div>
          <ul className='flex ml-auto items-center space-x-4'>
            {navItems.map((item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 text-xl duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
     
    </header>
  );
}

export default Header;
