import React ,{useContext} from 'react'
import UserContext from '../context/context'

function Profile() {
    const {user} = useContext(UserContext);
  if(!user) return <div>Waiting for user to  login..</div>
      return <h3>Sucsesfully Logined to {user.username}</h3>
}

export default Profile