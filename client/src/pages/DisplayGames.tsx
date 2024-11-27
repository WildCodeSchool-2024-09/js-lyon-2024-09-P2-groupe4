import { useState } from "react";
import DisplayGame from "./DisplayGame";
import { useGames } from "../contexts/GamesContext";

const DisplayGames = () => {
  const { games, selectedGameId, setSelectedGameId, isLoading, error } =
    useGames();
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

  if (isLoading) {
    return <p>Loading games...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const displayedGames = games.slice(currentIndex, currentIndex + 4);

  // Si un jeu est sélectionné, afficher le composant DisplayGame
  if (selectedGameId !== null) {
    return <DisplayGame selectedGameId={selectedGameId} />;
  }

  // Fonction pour gérer le clic et la sélection au clavier
  const handleSelection = (gameId: number) => {
    setSelectedGameId(gameId);
  };

  return (
    <div className="mainCard">
      <h1 className="libre-baskerville-regular">Liste des jeux</h1>
      <div className="games-list">
        {displayedGames.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleSelection(game.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleSelection(game.id);
              }
            }}
          >
            <img
              src={game.thumbnail}
              alt={`Thumbnail of ${game.title}`}
              width="150"
            />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
      <div className="button">
        <button id="button-left" type="button" onClick={onPrevious}>
          <img src="src\assets\images\Précédent.png" alt="Forward" />
        </button>
        <button id="button-right" type="button" onClick={onNext}>
          <img src="src\assets\images\Suivant.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default DisplayGames;
