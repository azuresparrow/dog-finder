import './App.css';
import { BrowserRouter, Router, UseRouter, Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList'
import DogDetails from './DogDetails';
import NavBar from "./NavBar"
import { createBrowserHistory } from 'history'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const newHistory = createBrowserHistory();

function App({dogs}) {
  return (
    <Router history={newHistory}>
      
    <NavBar dogs={dogs}></NavBar>
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={dogs}/> 
        </Route>
        <Route path="/dogs/:name" >
          <DogDetails dogs={dogs} /> 
        </Route>
        
        <Redirect to="/dogs" />
      </Switch>
    </Router>
    
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: '../images/whiskey.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: '../images/duke.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: '../images/perry.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: '../images/tubby.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
