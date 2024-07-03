import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const m2 ={
    detailsOfProduct:"this is mack book m2 ultra chip with AI gen Technology lets get to the boom",
    price: "3000$"
  }
  const m3 ={
    detailsOfProduct:"this is map book m3 ultra chipset with fast and enchaced features",
    price: "4500$"
  }
  return (
    <>
      <h1 className='text-2xl mb-2 font-bold text-yellow-300'>Banner</h1>
      
        {/* 
          so we ca n pass the props to the componenets 
          we can pass normal string or an object or an array enclosed in name = {}
         */}
      <div className='md:flex gap-4  flex-wrap justify-center'>
      <Card price={m2.price} modalinfo = {m2}  />
      <Card price={m3.price} modalinfo = {m3}  />
      </div>

    </>
  )
}

export default App
