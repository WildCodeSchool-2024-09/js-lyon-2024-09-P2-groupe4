import { useState } from "react";
import { useFavoritesGames } from "../contexts/FavoritesGamesContext";
import { useGames } from "./GamesContext";

const DisplayGame = ({ selectedGameId }: { selectedGameId: number }) => {
  const { games, setSelectedGameId } = useGames();
  const displayedGame = games.find((game) => game.id === selectedGameId);
  const { favoritesGames, setFavoritesGames } = useFavoritesGames();

  const [toggleFavorite, setToggleFavorite] = useState(false);

  function toggle() {
    if (toggleFavorite === false) {
      setToggleFavorite(true);
      setFavoritesGames([...favoritesGames, selectedGameId]);
    } else {
      setToggleFavorite(false);
      setFavoritesGames(favoritesGames.filter((id) => id !== selectedGameId));
    }
  }

  if (!displayedGame) {
    return <p>Jeu non trouvé</p>;
  }

  return (
    <div className="display-game">
      <button type="button" onClick={() => setSelectedGameId(null)}>
        Retour à la liste
      </button>
      <div className="game-details">
        <h2>{displayedGame.title}</h2>
        <img
          src={displayedGame.thumbnail}
          alt={`Thumbnail of ${displayedGame.title}`}
          width="300"
        />
        <p>{displayedGame.short_description}</p>
        <ul>
          <li>
            <strong>Genre :</strong> {displayedGame.genre}
          </li>
          <li>
            <strong>Plateforme :</strong> {displayedGame.platform}
          </li>
          <li>
            <strong>Éditeur :</strong> {displayedGame.publisher}
          </li>
          <li>
            <strong>Développeur :</strong> {displayedGame.developer}
          </li>
          <li>
            <strong>Date de sortie :</strong> {displayedGame.release_date}
          </li>
        </ul>
        <p>
          <a
            href={displayedGame.game_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Jouer au jeu
          </a>
          <button
            id="like-button"
            type="button"
            onClick={toggle}
            aria-label={
              toggleFavorite ? "Retirer du favori" : "Ajouter aux favoris"
            }
          >
            {toggleFavorite ? "🧡" : "🤍"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default DisplayGame;
