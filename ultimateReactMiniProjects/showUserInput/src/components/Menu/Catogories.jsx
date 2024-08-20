import React from 'react'

const Catogories = ({filterItems,catogries}) => {
  return (
    <div className='flex px-7 gap-4 justify-center my-4'>
    {/* <button onClick={()=>filterItems('breakfast')} className='px-6 py-2 text-xl rounded-md bg-[seagreen] text-white  '>
        BreakFast
    </button> 
    <button onClick={()=>filterItems('all')} className='px-6 py-2 text-xl rounded-md bg-[seagreen] text-white  '>
        ALL
    </button> 
    <button onClick={()=>filterItems('shakes')} className='px-6 py-2 text-xl rounded-md bg-[seagreen] text-white  '>
        Shakes
    </button> 
    <button onClick={()=>filterItems('lunch')} className='px-6 py-2 text-xl rounded-md bg-[seagreen] text-white  '>
        Lunch
    </button>  */}


    {
        catogries.map((catogry,index)=>{
            return <button key={index} onClick={()=>filterItems(catogry)} className='px-6 py-2 text-xl rounded-md bg-[seagreen] text-white  '>
        {catogry}
    </button> 
        } )
    }


    </div>
  )
}

export default Catogories
