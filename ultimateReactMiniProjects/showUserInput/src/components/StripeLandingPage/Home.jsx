import React from 'react'
import { useStripe } from './stripeContext/stripeContext'

function Home() {
  const {closeSubMenu}  = useStripe()

  return (
    <div onMouseOver={closeSubMenu}>
    <div   className="landing-page w-screen h-[90vh]"></div>
  
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-10">
      <div className="w-full md:w-1/2 flex flex-col h-[50vh] justify-center items-center text-center md:text-left">
        <h1 className="leading-tight tracking-widest text-5xl md:text-5xl lg:text-7xl font-extrabold">
          <span className='text-[#313131] border-b border-black shadow-black '>Finance</span>  Structure to  grow your revenue
        </h1>
      </div>
  
      <div className="sidePage w-full md:w-1/4 h-[50vh] md:h-auto flex justify-center md:justify-end items-center rounded-lg border border-gray-300 mt-8 md:mt-0"></div>
    </div>
  </div>
  
  )
}

export default Home
