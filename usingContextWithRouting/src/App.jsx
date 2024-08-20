import React, { useState,useEffect } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { UserContextProvider } from './context/userContext';
import { ThemeContextProvider } from './context/themeContext';
import Header from './components/header/Header';

function App() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [themeMode, setThemeMode] = useState('light');
  const [loginState, setLoginState] = useState(false);

  const  darkMode = () => setThemeMode('dark');
  const lightMode = () => setThemeMode('light');

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  

  return (

    
      <ThemeContextProvider value={{ themeMode, darkMode, lightMode }}>
    <UserContextProvider value={{ user, setUser , loginState , setLoginState}}>
      
     
        <div className={`w-full h-[80vh] flex flex-col 
        items-center justify-center `}>
        

          <div className='w-1/3 max-w-md'>
            <Input
              label='Email'
              isReq={true}
              placeholder='Enter your email'
              setUser={setUser}
              user={user}
            />
          </div>
 <button onClick={()=>darkMode()}>Click here</button>
          <div className='w-1/3 max-w-md '>
            <Input
              label='Password'
              type={`password`}
              isReq={true}
              placeholder='Enter your password'
              setUser={setUser}
              user={user}
            />
          </div>

          <div className='flex items-center justify-center '>
            <Button text='Submit' className='text-lg' />
            
     
          </div>
        </div>
    </UserContextProvider>
      </ThemeContextProvider>
  );
}

export default App;
