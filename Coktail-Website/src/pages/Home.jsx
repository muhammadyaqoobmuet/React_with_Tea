import React from 'react'
import SearchForm from '../components/SearchForm'
import CoktailList from '../components/CoktailList'


function Home() {

  return (
    <div className='w-full  min-h-[100vh]   overflow-hidden'>
     <SearchForm />
     <CoktailList />
    </div>
  )
}

export default Home
