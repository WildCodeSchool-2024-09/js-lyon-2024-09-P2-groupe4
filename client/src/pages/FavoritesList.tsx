import CardGame from "../components/CardGame";
import { useFavoritesGames } from "../contexts/FavoritesGamesContext";
import { useGames } from "../contexts/GamesContext";

function FavoritesList() {
  const { favoritesGames } = useFavoritesGames();
  const { games } = useGames();

  function withoutDuplicate() {
    const result: number[] = [];
    for (const item of favoritesGames) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  }

  const favforitesGamesWithoutDuplicate = withoutDuplicate();

  return (
    <>
      {favforitesGamesWithoutDuplicate.map((favoriteGameId) => {
        const game = games.find((g) => g.id === favoriteGameId);
        return game ? <CardGame key={favoriteGameId} game={game} /> : null;
      })}
    </>
  );
}

export default FavoritesList;
