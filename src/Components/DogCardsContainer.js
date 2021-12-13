import React, { useEffect, useContext, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid } from "@material-ui/core";
import AnimalCard from "./AnimalCard";
import { AuthContext } from "../App";

const DogCardsContainer = (props) => {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return null;
    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?type=dog",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);

  if (!results) {
    return <LinearProgress style={{ width: "100%", height: 5 }} />;
  }

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "15px",
        }}
      >
        Our dogs
      </h2>
      <Grid
        style={{ width: "100%" }}
        container
        justify="center"
        alignItems="center"
      >
        {results.map((result) => (
          <AnimalCard key={result.id} result={result} />
        ))}
      </Grid>
    </>
  );
};

export default DogCardsContainer;
