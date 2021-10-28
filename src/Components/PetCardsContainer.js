import React, { useEffect, useContext, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid } from "@material-ui/core";
import AnimalCard from "./AnimalCard";
import { AuthContext } from "../App";

const PetCardsContainer = (props) => {
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

  if (props.loading) {
    return <LinearProgress style={{ width: "100%", height: 5 }} />;
  }

  return (
    <Grid
      style={{ width: "100%" }}
      container
      justify="center"
      alignItems="center"
    >
      {props.results.map((result) => (
        <AnimalCard key={result.id} result={result} />
      ))}
    </Grid>
  );
};

export default PetCardsContainer;
