import React, {useContext} from 'react'
import { UserContext } from './user'
import {Link} from 'react-router-dom'
import pdf from '../cook.pdf'
import '../styles/parallax.css'




export default function Home() {
    
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    if(user){
      return<div className='main'> <h1 className='main-msg'>Welcome back {user.username} </h1><Link to="/recipes" className='myButton'>See all recipes</Link>
      
      
      
      </div>
    
     }
     return(<div className='home'>
      <div className='main'>
        
        <h1 className='main-msg' id='no-user'>Create an account today</h1>
    
        <p>Already a member? <Link to="/login" className='button-23'>Login</Link></p>

        <div class="main-container">

              <div class="parallax-1"> 
                  
              </div>
              <div class="text-1">
                  <h1>Section one</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis ad, optio quasi molestiae esse nam saepe libero animi, ullam sit ipsa suscipit magni reiciendis dicta rerum, error rem! Nostrum?</div>

              <div class="parallax-2"></div>
              <div class="text-2"><h1>Section two</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis ad, optio quasi molestiae esse nam saepe libero animi, ullam sit ipsa suscipit magni reiciendis dicta rerum, error rem! Nostrum?</div>
              </div>
              <div class="parallax-3"></div>
              <div class="parallax-4"></div>
              <div class=""></div>
              </div>

        <div>
          <h2>pdf</h2>
          
        </div>
    
    
    
      </div>
     
             
      
     
    
     )
}
