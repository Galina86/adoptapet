import LogInButton from "./LogInButton";
import SearchField from "./SearchField";

const RightNavigation = () => {
  return (
    <div
      style={{
        width: "49%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <SearchField />
      <LogInButton />
    </div>
  );
};

export default RightNavigation;
