import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem , increase , decrease } from '../features/cart/cartSlice'

function CartItem({id,title,price,img,amount}) {
  const dispatch = useDispatch()
  return (
    <article className='my-2 max-w-[1080px] mx-auto relative flex'>
     <img src={img} loading='lazy' width='80px' height='80px'  className='rounded-md' />
     <div className='mx-10 flex flex-col'>
      <h1>{title}</h1>
      <h1>${price}</h1>
      <button className='remove-btn bg-[transparent] 
       border border-[royalblue] rounded-md text-[royalblue] 
       text-md  px-2 self-start ' onClick={()=>dispatch(removeItem(id))} >remove</button>
     </div>
     
     <div className='flex flex-col  absolute right-0 mr-8 text-2xl '>
      <button onClick={()=>dispatch(increase({id}))}><i class='bx bxs-chevron-up font-semibold text-[royalblue]'  ></i></button>
      <p className='text-center text-sm -my-2'>{amount}</p>
      <button onClick={()=>{
        if(amount === 1){
          dispatch(removeItem(id));
          return;
        }else{
          dispatch(decrease({id}))
        }
      }}><i class='bx bx-chevron-down  font-bold text-[royalblue] '  ></i></button>
     </div>
    </article>
  )
}

export default CartItem
