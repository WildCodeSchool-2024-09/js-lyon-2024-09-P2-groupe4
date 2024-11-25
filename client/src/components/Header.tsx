import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div id="logo">
        <img src="src\assets\images\header.png" alt="logo" />
      </div>
      <nav id="nav">
        <Link to="/games">
          <img id="home" src="src\assets\images\Home.png" alt="Home" />
        </Link>
        <Link to="/favoris">
          <img id="favoris" src="src\assets\images\Favoris.png" alt="Favoris" />
        </Link>
        <Link to="">
          <img id="logout" src="src\assets\images\Logout.png" alt="Logout" />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
