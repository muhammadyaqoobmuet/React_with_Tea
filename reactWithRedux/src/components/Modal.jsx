import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
function Modal() {
    const dispatch = useDispatch();
  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-10 w-full min-h-screen'>
        <div className='flex h-screen justify-center items-center bg-black/80  relative '>
    <div className='w-[35vw] h-[40vh] flex flex-col justify-center items-center bg-white rounded-lg absolute  shadow-lg shadow-black p-6 shadow-2xl'>
      <h1 className='text-2xl font-semibold tracking-widest px-10'> Are you sure to clear all your items ?</h1>
      <div className='flex justify-between w-full  mt-10 px-10'>
        <button onClick={()=>{
            dispatch(clearCart());
            dispatch(closeModal())
        }} className='text-xl px-4 py-2 rounded-md bg-[royalblue] text-white font-bold '>Confirm</button>
        <button onClick={()=>dispatch(closeModal())} className='text-xl px-4 py-2 rounded-md bg-[red]  text-white font-bold '>Cancel</button>
      </div>
    </div>
  </div>
    </div>
  

  )
}

export default Modal
