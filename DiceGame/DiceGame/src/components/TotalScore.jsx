import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='flex justify-center sm:justify-normal sm:static my-2 sm:my-auto'>

    <div className='max-w-[135px]  flex flex-col  sm:items-center '>
                <h1 className={`text-center text-6xl font-semibold ${score >=0 ? 'text-[green]': 'text-[red]'}`}>{score}</h1>
                <h1 className='text-center text-xl'>Toal Score</h1>
            </div>
    </div>
  )
}

export default TotalScore
