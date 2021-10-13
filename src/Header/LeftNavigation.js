import Link from "@mui/material/Link";

const LeftNavigation = () => {
  return (
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
  );
};

export default LeftNavigation;
