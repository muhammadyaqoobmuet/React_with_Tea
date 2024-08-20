import React from 'react'
import useTheme from '../context/contextOfTheme'

function Home() {

    const {themeMode, lightMode, darkMode} = useTheme();
   
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
    }
  return (
<div className='w-full h-screen bg-white dark:bg-black transition-all duration-500 ease-in '>
    <header className=''>
        <nav className='flex justify-between py-4 px-6'>
            <div className='text-black text-3xl font-extrabold dark:text-white'>
                <h1>LOGO</h1>
            </div>

            <div>
                <ul className='  text-black flex gap-10 px-10 font-semibold dark:text-white cursor-pointer '>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <input onChange={onChangeBtn} checked={themeMode === "dark"} type='checkbox'  className='w-[50px] rounded-md' />
        </nav>
    </header>

    <div className='w-full mt-5'>
    <h1 className='text-black dark:text-white text-9xl text-center font-bold'>Welcome to sansFransisco  </h1>
    <p className='text-center my-4 text-black dark:text-white tracking-tighter leading-3'>
        this is what we got for you go for trip now lets go bhnka loda madarchod 
    </p>
    </div>
</div>
  )
}

export default Home