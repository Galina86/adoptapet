import Link from "@mui/material/Link";

const LeftNavigation = () => (
  <nav
    style={{
      width: "49%",
      display: "flex",
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
        ...linkStyles,
        marginRight: "40px",
      }}
    >
      Find a Cat
    </Link>
    <Link href="dogs" underline="hover" style={linkStyles}>
      Find a Dog
    </Link>
  </nav>
);

const linkStyles = {
  color: "whitesmoke",
  fontSize: "26px",
  fontFamily: "Source Sans Pro",
};

export default LeftNavigation;
