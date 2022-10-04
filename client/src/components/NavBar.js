import React, {useContext} from 'react'
import "../styles/NavBar.css"
import { NavLink, Link } from "react-router-dom";
import { UserContext } from './user'

// import { useHistory } from 'react-router';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

export default function Header() {

    const { user, setUser } = useContext(UserContext);

    function updatemenu() {
        if (document.getElementById('responsive-menu').checked == true) {
          document.getElementById('menu').style.borderBottomRightRadius = '0';
          document.getElementById('menu').style.borderBottomLeftRadius = '0';
        }else{
          document.getElementById('menu').style.borderRadius = '5px';
        }
      }
    // const history = useHistory()
    function handleClick(){
        // history.push('/')
      }
        
      
  return <>
  <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onClick={updatemenu}/><label></label>
  <ul>
    <li> <NavLink
        to="/"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Home
      </NavLink>
      </li>
      <li> <NavLink
        to="/recipes"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Recipes
      </NavLink></li>

    <li> <NavLink 
        to="/signup"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
       {user?"My list": "Sign Up"}
      </NavLink></li>
    <li><NavLink
        to="/login"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        {user? "Logout": "Login"}
      </NavLink></li>
    <li> <NavLink
        to="/addRecipe"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Add recipe
      </NavLink></li>
  </ul>

    
     
      
     




  <div id="logo-div" style={{float :"right",
marginRight: "10%", }}>
  {user?<Link to="/home"><img id="user-icon"src="https://drive.google.com/uc?id=1_OeQkvzmvITM5i4nYvqt5CSWVo51xvng"/></Link>:null}
  
  <h1 style={{color:"#fff", cursor : "pointer"}}  onClick={handleClick}>//Recipe Viewer</h1></div>
 </nav>
  </>
}

