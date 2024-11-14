import { useState } from "react";
import { useGames } from "./GamesContext";

const CardGame = () => {
  const games = useGames();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(false);
  const onPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : games.length - 1,
    );
  };
  const onNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < games.length - 1 ? prevIndex + 1 : 0,
    );
  };
  if (games.length === 0) {
    return <p>Loading games...</p>;
  }
  const game = games[currentIndex];
  return (
    <div className="card-game">
      <div id="game-info">
        <h2>Liste des jeux</h2>
        <h3>{game.title}</h3>
        <img
          id="game-img"
          src={game.thumbnail}
          alt={`Thumbnail of ${game.title}`}
          width="150"
        />
        <p>{game.short_description}</p>
        <p>Platform: {game.platform}</p>
        <p>Publisher: {game.publisher}</p>
        <p>
          <a href={game.game_url} target="_blank" rel="noopener noreferrer">
            Lien vers le jeu
          </a>
        </p>
      </div>
      <div id="buttons-bar">
        <button className="nav-buttons" type="button" onClick={onPrevious}>
          Précédent
        </button>
        <button className="nav-buttons" type="button" onClick={onNext}>
          Suivant
        </button>
        <button id="like-button" type="button" onClick={() => setLike(!like)}>
          {like ? "🧡" : "🤍"}
        </button>
      </div>
    </div>
  );
};
export default CardGame;
