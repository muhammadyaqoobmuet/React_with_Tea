import React from 'react'
import  { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
const Logout = () => {
    const dispatch = useDispatch();
    const handleBtn = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button onClick={handleBtn} className='px-6 py-2 rounded-md bg-[#3B82F6] text-white font-semibold' >Logout</button>
  )
}

export default Logout
