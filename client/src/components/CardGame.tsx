import { useEffect, useState } from "react";
interface Game {
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
}
const CardGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.mmobomb.com/api1/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGames(data as Game[]);
        }
      })
      .catch((error) => console.error("Error fetching game data:", error));
  }, []);
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
      <h2>Liste des jeux</h2>
      <div key={game.id}>
        <h3>{game.title}</h3>
        <img
          src={game.thumbnail}
          alt={`Thumbnail of ${game.title}`}
          width="150"
        />
        <p>{game.short_description}</p>
        <p>Genre: {game.genre}</p>
        <p>Platform: {game.platform}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Release Date: {game.release_date}</p>
        <p>
          Lien vers le jeu :{" "}
          <a href={game.game_url} target="_blank" rel="noopener noreferrer">
            {game.game_url}
          </a>
        </p>
        <div>
          <button type="button" onClick={onPrevious}>
            Précédent
          </button>
          <button type="button" onClick={onNext}>
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardGame;
