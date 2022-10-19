
import '../App.css';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';
import NewRecipeForm from './NewRecipeForm';
import Login from './Login';
import RecipeList from './RecipeList';
import MyList from './MyList';
import { Route, Switch } from "react-router-dom";
import { UserContext } from './user'
import React, {useState, useContext} from 'react'






function App() {
  const { user, setUser } = useContext(UserContext);

  console.log(user)
  return (
    <div className="App">
     
        <NavBar />
        <Switch>
          <Route exact path="/recipes">
            <RecipeList />
          </Route>
          <Route exact path="/signup">
           {user?<MyList/>:<Signup/>} 
          </Route>
          <Route exact path="/login">
          {user?<Home user={user}/>:<Login onLogin={setUser}/>}  
          </Route>
          <Route exact path="/addRecipe">
            {user?<NewRecipeForm />:<Login onLogin={setUser}/>}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
     

    </div>
  );
}

export default App;
