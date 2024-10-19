import React from 'react'
import { Link } from 'react-router-dom';

function Coktail({image,name,id,info,glass}) {
  console.log(info);
  return (
    <div className=' flex flex-col text-black bg-white rounded-md hover:scale-105 hover:shadow-md hover:shadow-black transition-all p-5'>
    <img className=' rounded-lg  object-cover  ' src={image} />
      <h1 className='py-2   text-2xl tracking-[0.4rem] font-semibold'>{name}</h1>
        <p className=' text-black tracking-wider'>{info}</p>
        <p className=' text-black font-bold'>{glass}</p>
        <Link to={`/cocktail/${id}`} > <button className='w-full  bg-purple-500 text-white font-semibold text-lg  py-2 rounded-lg hover:bg-purple-700'>order {name}</button>  </Link>
    </div>
  )
}

export default Coktail
