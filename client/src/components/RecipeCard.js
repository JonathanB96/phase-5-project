import React, {useState, useContext} from 'react'
import '../styles/Card.css'
import {  Link } from "react-router-dom";
import { UserContext } from './user'
import del from '../styles/images/delete.jpg'

export default function Card({recipe, recipeList, setRecipeList}) {
  const [btn, setBtn] = useState(true)
  const { user, setUser } = useContext(UserContext);

  //changing state when the btn is clicked
 
  function handleClick(){
    setBtn(!btn)   
    console.log(recipe.user.username) 
    console.log(user.username)
  }

  function handleDelete(){   
    console.log(recipeList)
    // const clickedReview = reviewList.find((review)=>{return review.user.username === user.username})
    fetch(`/recipes/${recipe.id}`,{method: 'DELETE'})
    .then(r=>{
      if(r.ok){
        const newRecipeList = recipeList.filter((r)=>{
          return r.id!= recipe.id          
        })
        setRecipeList(newRecipeList)  
        // setHasAddedReview(false)   

      }
      })
    
    }


  return <>
  <div className='card' style={{backgroundImage: `url(${recipe.image_url})`}}>
  
        <div className="overlay">
            <h4>{recipe.name}</h4>
            <div className={!btn? "overlay2": "steps"}> 
              <p><small>{recipe.steps}</small></p>
              
            </div>
       
           
        </div>
     <div id='card-bottom'>
     {user&&user.username===recipe.user.username?<button id="del-btn"onClick={handleDelete}>Delete</button>:null} 
      
    <button className="card-btn" onClick={handleClick} style={{background: !btn? "rgba(0, 0, 0, 0.5)": "#000"}}>{!btn?"Hide Recipe": "Show Recipe"}</button>      
    </div>   
    
  </div>
  
  </>
}
