import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useStripe } from './stripeContext/stripeContext'
function NavBar() {
    const {closeSubMenu,openSubMenu,openSideBar} = useStripe()

    const displaySubMenu = (e) =>{
        
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) /2
        const bottom = tempBtn.bottom -3;
        openSubMenu(page,{center,bottom});
        
    }
    const handleMouseOver = (e) =>{
        if(!e.target.classList.contains('link-btn')){
            closeSubMenu()
        }
    }
    return (
    <nav onMouseOver={handleMouseOver} className='flex w-[100vw]  px-4  gap-4 py-8 items-center  '>
        
        <div   className='w-full flex justify-between items-center '>
            <h2 className=' text-4xl font-bold text-white  shadow-md'>Stripe</h2>
            <div onClick={openSideBar} className='cursor-pointer block sm:hidden'>
                <FaBars />
            </div>
        </div>
        <ul className='hidden sm:flex  items-center gap-10  w-[5000px] place-self-stretch  '>
            <button   onMouseOver={(e)=>displaySubMenu(e)}  className=' link-btn tracking-widest hover:scale-110 bg-transparent text-white text-lg font-semibold'>
                products
            </button>
            <button  onMouseOver={(e)=>displaySubMenu(e)}   className=' link-btn tracking-widest hover:scale-110 bg-transparent text-white text-lg font-semibold'>
                developers
            </button>
            <button   onMouseOver={(e)=>displaySubMenu(e)}  className=' link-btn tracking-widest hover:scale-110 bg-transparent text-white text-lg font-semibold'>
                company
            </button>
        </ul>
        

        <button   className='hidden w-1/2  bg-pink-900 text-white font-semibold px-4 sm:flex items-center justify-center  py-1 hover:bg-pink-400 rounded-md'>
                SignUp
        </button>

    </nav>
  )
}

export default NavBar
