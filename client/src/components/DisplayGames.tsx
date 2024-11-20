import { useState } from "react";
import DisplayGame from "./DisplayGame"; // Assurez-vous d'importer le composant DisplayGame
import { useGames } from "./GamesContext";

const DisplayGames = () => {
  const { games, selectedGameId, setSelectedGameId, isLoading, error } =
    useGames(); // Destructure the context
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex - 4 < 0 ? games.length - 4 : currentIndex - 4,
    );
  };

  const onNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex + 4 >= games.length ? 0 : currentIndex + 4,
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

  return (
    <div className="mainCard">
      <h1 className="libre-baskerville-regular">Liste des jeux</h1>
      <div className="games-list">
        {displayedGames.map((game) => (
          <button
            key={game.id}
            className="game-card"
            onClick={() => setSelectedGameId(game.id)} // On clique sur l'image, on sélectionne le jeu
            type="button" // Ajout explicite du type pour éviter l'avertissement
          >
            <img
              src={game.thumbnail}
              alt={`Thumbnail of ${game.title}`}
              width="150"
            />
            <h3>{game.title}</h3>
          </button>
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
