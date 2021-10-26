import { useEffect, useState, useContext } from "react";
import PetCardsContainer from "./Components/PetCardsContainer";
import { AuthContext } from "./App";

const MainPage = () => {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const petResults = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const json = await petResults.json();
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  return <PetCardsContainer results={results} />;
};

export default MainPage;
