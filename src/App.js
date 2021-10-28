import "./App.css";
import { useEffect, createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftNavigation from "./Components/Header/LeftNavigation";
import RightNavigation from "./Components/Header/RightNavigation/RightNavigation";
import PetCardsContainer from "./Components/PetCardsContainer";
import CatCardsContainer from "./Components/CatCardsContainer";
import DogCardsContainer from "./Components/DogCardsContainer";

export const AuthContext = createContext();

function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("/api/oauth-token");
      const json = await res.json();
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
  }, []);

  return (
    <>
      <AuthContext.Provider value={accessToken}>
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
                <PetCardsContainer>
                  <Component {...pageProps} />
                </PetCardsContainer>
              </Route>
            </Switch>
          </Router>
        </body>
      </AuthContext.Provider>
    </>
  );
}

export default App;
