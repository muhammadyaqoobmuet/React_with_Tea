import React, { useState } from 'react';
import { useUser } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';

function Header() {
  const { user, loginState, setLoginState } = useUser();
  const { themeMode, darkMode, lightMode } = useTheme();
  const navigate = useNavigate();
   const [halat , setHalat ] = useState(false);
  
   const onClickBtn = ()=>{
    
    if(!halat){
        darkMode();
        console.log("i went here");
    }else{
        lightMode();
        console.log(" i also ");
    }
    setHalat(!halat);
   }
  
  


  const logoutME = () => {
    setLoginState(false);
    navigate('/login');
  };

  return (
    <div className='w-[1200px] mx-auto mt-2'>
      <div className='flex justify-between bg-[royalblue] px-6 py-4 rounded-e-full rounded-s-full'>
        <h1 className='text-2xl font-bold text-white'>Logo</h1>
        <div>
          <ul className='flex gap-4'>
            <li className='text-xl font-semibold text-white'>Contact</li>
            <li className='text-xl font-semibold text-white'>About</li>
            <NavLink to='/'>
              <li
                onClick={loginState ? logoutME : undefined}
                className='text-xl cursor-pointer font-semibold text-white'
              >
                {loginState ? 'Logout' : 'Login'}
              </li>
            </NavLink>
            <button onClick={onClickBtn}>Change theme</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
