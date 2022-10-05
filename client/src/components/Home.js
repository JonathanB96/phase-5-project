import React, {useContext} from 'react'
import { UserContext } from './user'
import {Link} from 'react-router-dom'

export default function Home() {
    
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    if(user){
      return<div className='main'> <h1 className='main-msg'>Welcome back {user.username} </h1><Link to="/recipes" className='myButton'>See all recipes</Link></div>
    
     }
     return(<div className='home'>
      <div className='main'>
        
        <h1 className='main-msg' id='no-user'>Create an account today</h1>
    
        <p>Already a member? <Link to="/login" className='button-23'>Login</Link></p>
    
    
    
      </div>
     
             
      
     </div>
    
     )
}
