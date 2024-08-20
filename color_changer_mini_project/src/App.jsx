import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [color, setColor] = useState("black")
  
  return (
    <>
      
    <div  style={{background:color}} className='w-full h-screen relative '> 

      <div className='flex flex-wrap w-[98vw] h-[10vh] 
      mx-auto bg-[rgba(255,255,255,0.5)] rounded-md shadow-slate-200 
      shadow-md  absolute bottom-2 left-2 right-2 z-10 '>

        <div className='w-full h-full flex items-center justify-evenly'>
        <button  onClick={()=>setColor("red")}
         className='bg-red-950 px-4 py-1 rounded-md text-white'>
          RED
          </button>

          <button onClick={()=>setColor("green")}
          className='bg-green-950 px-4 py-1 rounded-md text-white'>
          GREEN
          </button>

          <button  onClick={()=>setColor("orange")}
           className='bg-orange-500 px-4 py-1 rounded-md text-white'>
          ORANGE
          </button>

          <button   onClick={()=>setColor("pink")}
           className='bg-pink-600 px-4 py-1 rounded-md text-white'>
          PINK 
          </button>
        </div>
    </div>
    </div>

    </>
  )
}

export default App
