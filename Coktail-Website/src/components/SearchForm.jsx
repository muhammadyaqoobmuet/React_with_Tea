import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../pages/context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle search input change
  const handleSearch = () => {
    setSearchTerm(searchValue.current.value);
  };
 useEffect(()=>{
  searchValue.current.focus()
 },[])
  return (
    <div className='w-full max-w-md mx-auto py-8'>
      <form onSubmit={handleSubmit} className='flex items-center bg-gray-800 rounded-lg overflow-hidden'>
        <input
          type='text'
          ref={searchValue}
          onChange={handleSearch}
          placeholder='Search for a cocktail...'
          className='w-full focus:outline-4 focus:outline-blue-900 px-4 py-2 text-black '
        />
        <button
          type='submit'
          className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 font-semibold transition-colors duration-300'
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
