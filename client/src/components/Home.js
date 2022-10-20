import React, {useContext} from 'react'
import { UserContext } from './user'
import {Link} from 'react-router-dom'
import pdf from '../cook.pdf'
import '../styles/parallax.css'




export default function Home() {
    
    const { user, setUser } = useContext(UserContext);
    console.log(user)
   
     return(<div className='home'>
      {user?<div className='main'> <h1 className='main-msg'>Welcome back {user.username} </h1><Link to="/recipes" className='myButton'>See all recipes</Link></div>
    :<Link to="/recipes" className='myButton'>See all recipes</Link>}
     
      <div className='main'>
        
        {user?null:<div> 
        <h1 className='main-msg' id='no-user'>Create an account today</h1>        
        <p>Already a member? <Link to="/login" className='button-23'>Login</Link></p>
        </div>}
        
        
       
        <div className="main-container">

              <div class="parallax-1"> 
                  
              </div>
              <div className="text-1">
                  <h1>Section one</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis ad, optio quasi molestiae esse nam saepe libero animi, ullam sit ipsa suscipit magni reiciendis dicta rerum, error rem! Nostrum?</div>

              <div className="parallax-2"></div>
              <div className="text-2"><h1>Section two</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis ad, optio quasi molestiae esse nam saepe libero animi, ullam sit ipsa suscipit magni reiciendis dicta rerum, error rem! Nostrum?</div>
              </div>
              <div className="parallax-3"></div>
              <div className="parallax-4"></div>
              <div className=""></div>
              </div>

      
    
    
      </div>
     
             
      
     
    
     )
}
