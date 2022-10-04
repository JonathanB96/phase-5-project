import React, {useContext} from 'react'
import { UserContext } from './user'

export default function Home() {
    
    const { user, setUser } = useContext(UserContext);
    console.log(user)
  return (
    <div>Home
        
    </div>

  )
}
