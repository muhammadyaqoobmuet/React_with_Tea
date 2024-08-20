import React from 'react';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
function Button({
  text = 'Click Me',
  className = '',
  ...props
}) {
  const { user , loginState, setLoginState } = useUser();
    const navigate = useNavigate();
  const handleClick = () =>{
        if(user.email && user.password){
           setLoginState((loginState)=>!loginState)
           navigate('/home')
           console.log();
        }
  }
  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
