import React,{useState, useContext} from 'react'
import '../styles/AddRecipe.css'
import { Link } from "react-router-dom";
import { UserContext } from './user'
// import { useHistory } from 'react-router-dom'

export default function NewRecipeForm() {
  const [recipeName, setRecipeName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [steps, setSteps] = useState("")
  const [category, setCategory] = useState("")
  const { user, setUser } = useContext(UserContext);
  const [cuisine, setCuisine] = useState("")

  const formData = {
    name: "",
    steps:"",
    image_url:"",
    category:"",
    user_id:"",
    cuisine:""}
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
  function handleCategory(e){
    setCategory(e.target.value)
  }
  function handleCuisine(e){
    setCuisine(e.target.value)

  }
  function handleSubmit(e){
    e.preventDefault()

      formData.name = recipeName
      formData.image_url= imgUrl
      formData.steps= steps
      formData.category= category
      formData.user_id = user.id
      formData.cuisine = cuisine

      fetch(`/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(formData)
    }).then((r)=>r.json())
      .then((newReview)=>{
        console.log(newReview)
      })  
    
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

    
    <select value={category} onChange={handleCategory}>
      <option>Select category</option>
      <option>Breakfast</option>
      <option>Lunch</option>
      <option>Dinner</option>
      <option>Salad</option>
      <option>Baked-good</option>
    </select>

    <select value={cuisine} onChange={handleCuisine}>
      <option>Select cuisine</option>
      <option>American</option>
      <option>Global</option>
      <option>Cuisine</option>
      <option>Italian</option>
      <option>Vegetarian</option>
      <option>Asian</option>
      <option>Mexican</option>
    </select>

    <label>Steps</label>
    <textarea id="steps"  onChange ={handleSteps}
    value={steps} placeholder="Describe the steps of the recipe.." style={{height:"200px"}}></textarea>
    <Link to="/recipes">See recipes</Link>
    <input type="submit" value="Submit"/>
    

  </form>
</div> 
  </>
}
