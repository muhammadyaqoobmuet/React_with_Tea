import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useActionData, useNavigate } from 'react-router-dom'
export default function Protected({children , authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    },[authentication,navigate,authStatus])

    return loader ? <h1 className='text-2xl font-semibold text-[#2cb166]'>Loading...</h1> : <>{children}</>

  
}


