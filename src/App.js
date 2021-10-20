import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftNavigation from "./Components/Header/LeftNavigation";
import RightNavigation from "./Components/Header/RightNavigation/RightNavigation";
import PetCardsContainer from "./Components/PetCardsContainer";
import CatCardsContainer from "./Components/CatCardsContainer";
import DogCardsContainer from "./Components/DogCardsContainer";

function App() {
  return (
    <>
      <body className="App">
        <Router>
          <header className="App-header">
            <LeftNavigation />
            <RightNavigation />
          </header>
          <Switch>
            <Route exact path="/dogs/:id"></Route>
            <Route exact path="/cats/:id"></Route>
            <Route exact path="/dogs">
              <DogCardsContainer />
            </Route>
            <Route exact path="/cats">
              <CatCardsContainer />
            </Route>
            <Route exact path="/">
              <PetCardsContainer />
            </Route>
          </Switch>
        </Router>
      </body>
    </>
  );
}

export default App;
