import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-1/2 p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center" >DEAD PAGE ERROR GO BACK</h1>
        
        <Link to='/' > <button className="bg-[#111827] text-white w-full mt-4  py-2 text-xl font-semibold tracking-wider">go back to Home</button> </Link>
        
      </div>
    </div>
  )
}

export default ErrorPage
