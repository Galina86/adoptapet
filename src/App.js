import "./App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LeftNavigation from "./Header/LeftNavigation";
import RightNavigation from "./Header/RightNavigation/RightNavigation";

function App() {
  return (
    <>
      <head>
        <title>Pet Savers</title>
      </head>
      <body className="App">
        <header className="App-header">
          <LeftNavigation />
          <RightNavigation />
        </header>
      </body>
      <main>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          Pet Savers
        </Typography>
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
    </>
  );
}

export default App;
