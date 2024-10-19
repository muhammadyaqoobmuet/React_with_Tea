import React, { useEffect } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Home from './Home'
import SubMenu from './SubMenu'
import { useStripe } from './stripeContext/stripeContext'
import '../StripeLandingPage/Stripe.css'
function StripeMain() {
    
   
    
  return (
    <div className='w-screen h-screen'>
        <NavBar />
        <SideBar />
       <Home />
        <SubMenu />
    </div>
  )
}

export default StripeMain
