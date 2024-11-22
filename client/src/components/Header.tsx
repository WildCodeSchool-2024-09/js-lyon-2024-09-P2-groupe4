import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <image id="image">
        <img id="Burger" src="src\assets\images\menu.png" alt="burger" />
        <img id="Logo" src="src\assets\images\header.png" alt="logo" />
      </image>
      <nav id="nav">
        <Link to="/games">Home</Link>
        <Link to="/favoris">Favoris</Link>
        <Link to="">Logout</Link>
      </nav>
    </header>
  );
}
export default Header;
