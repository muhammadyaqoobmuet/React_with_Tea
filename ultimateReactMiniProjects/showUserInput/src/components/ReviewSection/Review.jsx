import React,{useState} from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
import people from './data'
function Review() {
    const [index,setIndex] = useState(0);
    
    const leftClick = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? people.length - 1 : prevIndex - 1));
      };
    
      const rightClick = () => {
        setIndex((prevIndex) => (prevIndex === people.length - 1 ? 0 : prevIndex + 1));
      };
    
      const randomGenerate = () => {
        let randomIndex = Math.floor(Math.random() * people.length);
        // Ensure the random index is different from the current index to avoid repetition
        if (randomIndex === index) {
          randomIndex = (index + 1) % people.length;
        }
        setIndex(randomIndex);
      };
    

  return (
    <div className='w-full py-4  relative '>
    
       <div className='relative'>
       <img className='aspect-square  shadow-md shadow-sky-700 object-cover mx-auto rounded-full  h-64' src={people[index].image} />
       <FaQuoteRight className='absolute text-sky-700 hidden sm:block sm:right-52 text-2xl top-3 ' />
       </div>
        <p className='text-center my-2 text-2xl font-semibold '>{people[index].name}</p>
        <p className='text-center my-2 text-lg font-semibold text-sky-800'>{people[index].job}</p>
        <div>
            <p className='text-lg text-center px-3 leading-relaxed'>{people[index].text}</p>
        </div>
        <div className='flex justify-between items-center py-4'>
         <button onClick={leftClick}>   <FaChevronLeft className='text-xl font-semibold' /></button>
         <button onClick={randomGenerate} className='text-lg font-semibold bg-sky-700 px-4 py-2 rounded-lg text-white'>Suprise Me </button>
            <button onClick={rightClick}><FaChevronRight  className='text-xl font-semibold'/></button>
        </div>
    </div>
  )
}

export default Review
