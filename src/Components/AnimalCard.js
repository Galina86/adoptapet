import React, { useState } from "react";
import {
  CardMedia,
  Grid,
  Card,
  CardActionArea,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
  },
  image: {
    height: 400,
    [theme.breakpoints.up("lg")]: {
      height: 250,
    },
  },
}));

const AnimalCard = (props) => {
  const { result } = props;
  const classes = useStyles();
  const [imageLoading, setImageLoading] = useState(true);
  let ImageComponent;

  if (result.photos && result.photos[0] && result.photos[0].full) {
    ImageComponent = () => (
      <div
        className={classes.image}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgb(200,200,200)",
        }}
      >
        <CardMedia
          component="img"
          className={classes.image}
          image={result.photos[0].full}
          onLoad={() => setImageLoading(false)}
          style={imageLoading ? { display: "none" } : {}}
        />
        {imageLoading && <CircularProgress />}
      </div>
    );
  } else {
    return null;
  }

  return (
    <Grid item xs={6} lg={3} style={{ padding: 5 }}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/animal/${result.id}`}
        key={result.id}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <ImageComponent />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                fontSize: "20px",
                padding: "5px 0 5px 0",
              }}
            >
              {result.name}
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                fontSize: "16px",
                paddingBottom: "5px",
              }}
            >
              {result.gender}, {result.age}
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};
export default AnimalCard;
