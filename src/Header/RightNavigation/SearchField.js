import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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

const SearchField = () => {
  return (
    <>
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
          paddingRight: "30px",
          borderColor: "whitesmoke",
        }}
      />
    </>
  );
};

export default SearchField;
