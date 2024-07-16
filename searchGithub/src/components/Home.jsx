import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#202746] to-[#406470]">
  <div className="flex justify-between px-10 items-center h-full">
    <div className='w-[50%] h-[70%]  flex flex-col py-10 px-10'>
      <h1 className="text-white text-7xl font-bold tracking-wide">Find Anyone.</h1>
      <p className='text-white leading-[1.2]  my-4'>Explore GitHub profiles effortlessly. Discover talented developers, 
      their projects, and contributions across the platform. Start your search now and connect with the community</p>
      <NavLink to='github'>
      <button className='w-[80%] bg-[#222A59] py-2 mt-2 hover:bg-[#1e2657]  hover:scale-[1.1] transition-all text-white font-semibold rounded-md'>Get Started</button>
      </NavLink>
    </div>
    <div className="w-[50%] h-[70%]  ">
      <img className="object-cover w-full h-full rounded-xl shadow-md shadow-white" src="https://github.githubassets.com/assets/code-search-beta-2e12b861d924.png" alt="Code Search" />
    </div>
  </div>
</div>

  )
}

export default Home