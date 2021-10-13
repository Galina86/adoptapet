import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LogInButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "whitesmoke",
        marginRight: "40px",
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
};

export default LogInButton;
