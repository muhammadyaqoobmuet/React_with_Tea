import React from 'react'
import Review from './Review' 
function CompleteReviewSection() {
  return (
    <section className='max-w-[620px] mx-auto h-screen'>
    <div>
        <h1 className='text-center pt-20 text-4xl font-bold  '>Review Section</h1>
        <div className='w-[80px] bg-sky-800 h-[4px] my-2 mx-auto'></div>
    </div>
    <Review />
    </section>
  )
}

export default CompleteReviewSection
