import React from 'react'

function ListofItems() {
    const listOfitems = ["apple","banan","orange","pineapple","heheheh"]
  return (
<div className='w-[50vw] h-[50vh] bg-gray-300'>
    <ul className='text-center py-20'>
          {listOfitems.map((value,index)=>{
              return <li key={index} className='font-bold' >{value}</li>
          })}
        </ul>
    </div>
  )
}

export default ListofItems