import { useState } from "react";
import { useGames } from "./GamesContext";

const CardGame = () => {
  const { games } = useGames(); // Assurez-vous de destructurer l'objet retourné par useGames
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(false);

  // Fonction pour naviguer vers le jeu précédent
  const onPrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex > 0 ? currentIndex - 1 : games.length - 1,
    );
  };

  // Fonction pour naviguer vers le jeu suivant
  const onNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex < games.length - 1 ? currentIndex + 1 : 0,
    );
  };

  // Si la liste des jeux est vide, afficher un message de chargement
  if (games.length === 0) {
    return <p>Loading games...</p>;
  }

  const game = games[currentIndex]; // Accéder au jeu actuellement sélectionné

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
        <button
          className="nav-buttons"
          type="button"
          onClick={onPrevious}
          aria-label="Jeu précédent"
        >
          Précédent
        </button>
        <button
          className="nav-buttons"
          type="button"
          onClick={onNext}
          aria-label="Jeu suivant"
        >
          Suivant
        </button>
        <button
          id="like-button"
          type="button"
          onClick={() => setLike(!like)}
          aria-label={like ? "Retirer du favori" : "Ajouter aux favoris"}
        >
          {like ? "🧡" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default CardGame;
