import React ,{useState} from 'react'
import UserContext from '../context/context'
import { useContext } from 'react';

function Login() {
     const [username, setusername] = useState('');
     const [password, setpassword] = useState('');
     const {setUser} = useContext(UserContext);

     function handle(e){
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div>
        <h1>LOGIN NOW</h1>
        <label htmlFor='username'>username</label>
        <input id='username' value={username} onChange={(e)=>{
                setusername(e.target.value)
        }} />
          <label htmlFor='password'>password</label>
        <input id='password' value={password} onChange={(e)=>{
                setpassword(e.target.value)
        }} />

        <button onClick={handle} >LOGIN</button>
    </div>
    
  )
}

export default Login