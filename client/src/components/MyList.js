import React,{useEffect, useContext, useState} from 'react'
import { UserContext } from './user'
import '../styles/Tips.css'
import top_Img from '../styles/images/mise-en-plase.jpg'

export default function MyList() {
    const { user, setUser } = useContext(UserContext);
    const [recipes, setRecipes]= useState([])
    useEffect(() => {
        fetch(`/recipes/${user.id}`)
          .then((r) => r.json())
          .then((recipes)=>{
            setRecipes(recipes)
            console.log(recipes)
          
          });
      }, []);

      function download(){

        fetch("/pages/download")
        .then((r) => {
         return r.blob()
        })
        .then((data)=>{ 
         let a = document.createElement("a")
        a.href = window.URL.createObjectURL(data)
        a.download = "9_cooking_tips"
        a.click()       
      })
      }
  return <>
    <div className='home'>
      
     
      <div className='main'>
        
       
        
       
        <div className="main-container">

              <div class="div-1"> 
                  
              </div>
              <div className="text-1">
                  <h1>Cooking tips for beginners</h1>
                  <button id="btn" onClick={download}>Download PDF file</button> <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis ad, optio quasi molestiae esse nam saepe libero animi, ullam sit ipsa suscipit magni reiciendis dicta rerum, error rem! Nostrum?</div>

              <div className="div-2"></div>
              <div className="text-2">
              If you’re just starting out in the kitchen, you might not know where to begin. But never fear — we’re here to help you along! Simple practices like making notes while you cook or substituting an ingredient when necessary can make a considerable difference. </div>
              </div>
              <div className="div-3"></div>
              <div className="parallax-4"></div>
              <div className=""></div>
          </div>

      
    
    
      </div>
     
</>
}
