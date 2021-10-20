import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LogInButton = () => (
  <Button
    variant="contained"
    size="small"
    style={{
      backgroundColor: "whitesmoke",
      marginRight: "40px",
      borderRadius: "5px",
      padding: "9px",
    }}
  >
    <Typography
      variant="subtitle1"
      style={{
        color: "black",
      }}
    >
      Log In
    </Typography>
  </Button>
);

export default LogInButton;
