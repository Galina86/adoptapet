import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <head>
        <title>Pet Savers</title>
      </head>
      <body className="App">
        <header className="App-header">
          <nav>
            <ul>
              <img
                src="https://www.pngkey.com/png/full/422-4223574_dog-and-cat-cartoon.png"
                alt="HelloFresh logo"
                class="logo"
                href="https://www.petsavers.com/"
                target="_self"
                title="Home"
              />
              <li class="header-link">
                <a
                  href="https://www.petsavers.com/cats"
                  target="_self"
                  title="Cats"
                >
                  Find a Cat
                </a>
              </li>
              <li class="header-link">
                <a
                  href="https://www.petsavers.com/dogs"
                  target="_self"
                  title="Dogs"
                >
                  Find a Dog
                </a>
              </li>
              <div class="search">
                <img
                  src="https://www.pngkey.com/png/full/16-164810_transparent-search-icon-png.png"
                  alt="search"
                  class="search-img"
                />
                <input
                  class="searchbar"
                  type="text"
                  placeholder="Search..."
                ></input>
              </div>
            </ul>
          </nav>
        </header>
      </body>
      <h1>Pet Savers</h1>
      <main></main>
    </>
  );
}

export default App;
