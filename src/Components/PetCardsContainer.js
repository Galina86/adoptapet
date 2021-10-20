import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const PetCardsContainer = () => {
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "15px",
        }}
      >
        Welcome to Pet Savers!
      </h1>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        Our pets
      </h2>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
      </Grid>
    </main>
  );
};

export default PetCardsContainer;
