import React, { useEffect } from 'react'
import './lightThemeWithCss.css'
import useLocalStorage from './useLocalStorage'
function ThemeChanger() {
    const [theme,setTheme]= useLocalStorage('theme','dark');

    const handeTheme = ()=>{
            setTheme(theme === 'light' ? 'dark' : 'light')
    }
     
    useEffect(()=>{
            document.querySelector('html').classList.remove('light','dark');   
            document.querySelector('html').classList.add(theme);
    },[theme])
  return (
    <div className='light-dark-mode dark:bg-black bg-white transition-colors '>
        <div className='container dark:text-white w-full h-screen text-black flex flex-col items-center justify-center '>
                <p className='text-4xl my-2'>Hello World</p>
                <button onClick={handeTheme} className=' px-4 py-1 rounded-md bg-red-500'>Change Theme</button>
        </div>
      
    </div>
  )
}

export default ThemeChanger
