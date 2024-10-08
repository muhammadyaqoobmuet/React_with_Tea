import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'
import Input from './Input'
import { useNavigate ,Link } from 'react-router-dom'

function Login() {

    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");
    const navigate = useNavigate()
   const login = async (data)=>{
        setError("");
        try {
    const session = await authService.login(data)
            if(session){
                const userData = await authService.getUser();
                if(userData) dispatch(authLogin(userData))
                    navigate()
            }
        } catch (error) {
            
        }
   }
    
   return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <h1 className='text-2xl font-bold'>M&BLOG</h1>
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="w-full px-4 py-2 bg-[royalblue] rounded-md text-white"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
