
import '../App.css';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';
import NewRecipeForm from './NewRecipeForm';
import Login from './Login';
import RecipeList from './RecipeList';
import { Route, Switch } from "react-router-dom";
import {UserProvider} from './user';



function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path="/recipes">
            <RecipeList />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/NewRecipeForm">
            <NewRecipeForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </UserProvider>
     

    </div>
  );
}

export default App;
