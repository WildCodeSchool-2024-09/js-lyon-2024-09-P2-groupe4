import { useFavoritesGames } from "../contexts/FavoritesGamesContext";

interface GameProps {
  game: {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    profile_url: string;
  };
}

const CardGame = ({ game }: GameProps) => {
  const { favoritesGames, setFavoritesGames } = useFavoritesGames();

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
          <div id="buttons-bar">
            <button
              id="remove-button"
              type="button"
              onClick={() => {
                setFavoritesGames(
                  favoritesGames.filter((id) => id !== game.id),
                );
              }}
            >
              Retirer des favoris
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CardGame;
