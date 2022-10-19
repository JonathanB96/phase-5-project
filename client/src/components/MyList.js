import React,{useEffect, useContext, useState} from 'react'
import { UserContext } from './user'

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
  return (
    <div>

        My list
        
        
    </div>
  )
}
