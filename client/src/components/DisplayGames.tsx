import "react";
import { useState } from "react";
import { useGames } from "./GamesContext";

const DisplayGames = () => {
  const games = useGames();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? games.length - 4 : prevIndex - 4,
    );
  };
  const onNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= games.length ? 0 : prevIndex + 4,
    );
  };
  if (games.length === 0) {
    return <p>Loading games...</p>;
  }
  const displayedGames = games.slice(currentIndex, currentIndex + 4);
  return (
    <div className="mainCard">
      <h1 className="libre-baskerville-regular">Liste des jeux</h1>
      <div className="games-list">
        {displayedGames.map((game) => (
          <div key={game.id} className="game-card">
            <img
              src={game.thumbnail}
              alt={`Thumbnail of ${game.title}`}
              width="150"
            />
            {/* <p>{game.short_description}</p> */}
            {/* <p>Genre: {game.genre}</p> */}
            {/* <p>Platform: {game.platform}</p> */}
            {/* <p>Publisher: {game.publisher}</p> */}
            {/* <p>Release Date: {game.release_date}</p> */}
            {/* <p>
              Lien vers le jeu :{" "}
              <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                {game.game_url}
              </a>
            </p> */}
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
      <div className="button">
        <button type="button" onClick={onPrevious}>
          Précédent
        </button>
        <button type="button" onClick={onNext}>
          Suivant
        </button>
      </div>
    </div>
  );
};
export default DisplayGames;
