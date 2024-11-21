import { useFavoritesGames } from "../contexts/FavoritesGamesContext";
import { useIsFavorite } from "../contexts/IsFavoriteContext";
import { useGames } from "./GamesContext";

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
  const games = useGames();

  const { isFavorite, setIsFavorite } = useIsFavorite();
  const { favoritesGames, setFavoritesGames } = useFavoritesGames();

  function toggleFavorite() {
    if (isFavorite === false) {
      setIsFavorite(true);
      setFavoritesGames([...favoritesGames, game.id]);
    } else {
      setIsFavorite(false);
      setFavoritesGames(favoritesGames.filter((id) => id !== game.id));
    }
  }

  if (games.length === 0) {
    return <p>Loading games...</p>;
  }
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
        <button id="like-button" type="button" onClick={toggleFavorite}>
          {isFavorite ? "🧡" : "🤍"}
        </button>
      </div>
    </div>
  );
};
export default CardGame;
