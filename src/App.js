import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const SearchTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "whitesmoke",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "whitesmoke",
    },
    "&:hover fieldset": {
      borderColor: "whitesmoke",
    },
    "&.Mui-focused fieldset": {
      borderColor: "whitesmoke",
    },
  },
});

function App() {
  return (
    <>
      <head>
        <title>Pet Savers</title>
      </head>
      <body className="App">
        <header className="App-header">
          <nav
            style={{
              width: "35%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img
                src="https://www.pngkey.com/png/full/422-4223574_dog-and-cat-cartoon.png"
                alt="HelloFresh logo"
                class="logo"
                title="Home"
              />
            </a>
            <Link
              href="cats"
              underline="hover"
              style={{
                color: "whitesmoke",
                fontSize: "30px",
                fontFamily: "Source Sans Pro",
              }}
            >
              Find a Cat
            </Link>
            <Link
              href="dogs"
              underline="hover"
              style={{
                color: "whitesmoke",
                fontSize: "30px",
                fontFamily: "Source Sans Pro",
              }}
            >
              Find a Dog
            </Link>
          </nav>
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <SearchOutlinedIcon
              style={{
                color: "whitesmoke",
                fontSize: "52px",
                marginRight: "10px",
              }}
            />
            <SearchTextField
              label="Search"
              type="search"
              style={{
                fontSize: "24px",
                fontFamily: "Source Sans Pro",
                paddingRight: "40px",
                borderColor: "whitesmoke",
              }}
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "whitesmoke",
                marginRight: "40px",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "black",
                }}
              >
                Log In
              </Typography>
            </Button>
          </div>
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
