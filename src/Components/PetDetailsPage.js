import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../App";
import LinearProgress from "@material-ui/core/LinearProgress";

const PetDetailsPage = () => {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === undefined) return null;
    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?limit=100",
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

  let params = useParams();

  if (!results) {
    return <LinearProgress style={{ width: "100%", height: 5 }} />;
  }

  const result = results.find((obj) => {
    return obj.id == params.id;
  });

  return (
    <>
      <h2 style={{ marginTop: "200px" }}>Pet: {result.name}</h2>
    </>
  );
};

export default PetDetailsPage;
