import React from 'react'
import { useTheme } from '../../context/themeContext'
function Footer() {
    const {darkMode} = useTheme()
  return (
    <div className='w-full bg-[royalblue] py-4'>
        <h1 className='text-center text-white'> copyright 2024 &copyright claim <a>readmore..</a> </h1>
        <button onClick={()=>darkMode()}>Dark</button>
    </div>
  )
}

export default Footer
