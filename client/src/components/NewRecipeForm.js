import React,{useState, useContext} from 'react'
import '../styles/AddRecipe.css'
import { Link } from "react-router-dom";
import { UserContext } from './user'
// import { useHistory } from 'react-router-dom'

export default function NewRecipeForm() {
  const [recipeName, setRecipeName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [steps, setSteps] = useState("")
  const { user, setUser } = useContext(UserContext);

  const formData = {
    name: "",
    image:"",
    steps:""}
  // const history = useHistory()

  function handleName(e){
    setRecipeName(e.target.value)

  }
  function handleUrl(e){
    setImgUrl(e.target.value)

  }
  function handleSteps(e){
    setSteps(e.target.value)

  }

  function handleSubmit(e){
    e.preventDefault()

      formData.name = recipeName
      formData.image = imgUrl
      formData.steps= steps

      fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(formData)
    }).then(()=>{alert("success!")})  
    
    }

   

   
       
        
    

  return <>
    <div className="addrecipe-container">
  <form id='addRecipe-form' onSubmit={handleSubmit}>

    <label>Recipe name</label>
    <input type="text" onChange ={handleName}
     value={recipeName} id="recipeName" placeholder="Recipe name.."/>

    <label>Image URL</label>
    <input type="text"  onChange ={handleUrl}
    value={imgUrl} id="imageUrl" placeholder="Image URL here"/>

    <label>Steps</label>
    <textarea id="steps"  onChange ={handleSteps}
    value={steps} placeholder="Describe the steps of the recipe.." style={{height:"200px"}}></textarea>
    <Link to="/recipes">See recipes</Link>
    <input type="submit" value="Submit"/>
    

  </form>
</div> 
  </>
}
