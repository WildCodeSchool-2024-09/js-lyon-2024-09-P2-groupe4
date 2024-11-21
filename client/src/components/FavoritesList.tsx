import { useFavoritesGames } from "../contexts/FavoritesGamesContext";
import CardGame from "./CardGame";
import { useGames } from "./GamesContext";

function FavoritesList() {
  const { favoritesGames } = useFavoritesGames();
  const games = useGames();

  return (
    <>
      {favoritesGames.map((favoriteGameId) => {
        const game = games.find((g) => g.id === favoriteGameId);
        return game ? <CardGame key={favoriteGameId} game={game} /> : null;
      })}
    </>
  );
}

export default FavoritesList;
