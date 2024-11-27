import { Link } from "react-router-dom";
import { useIsOnline } from "../contexts/IsOnlineContext"; // Import du contexte

function Header() {
  const { isOnline } = useIsOnline(); // Récupère le statut en ligne

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
      <div className="status">
        {/* Affichage conditionnel du statut en ligne */}
        {isOnline ? (
          <p id="online-status">
            <img src="src\assets\images\dragon_online.png" alt="dragon_vert" />
            Online
          </p>
        ) : (
          <p id="offline-status">
            <img
              src="src\assets\images\dragon_offline.png"
              alt="dragon_rouge"
            />
            Offline
          </p>
        )}
      </div>
    </header>
  );
}
export default Header;
