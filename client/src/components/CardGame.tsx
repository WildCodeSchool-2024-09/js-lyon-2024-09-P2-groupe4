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

function CardGame(game: GameProps) {
  return (
    <div className="card-game">
      <h2>{game.game.title}</h2>
      <img src={game.game.thumbnail} alt={`Logo de ${game.game.title}`} />
      <p>{game.game.short_description}</p>
      <p>Lien vers le jeu : {game.game.game_url}</p>
    </div>
  );
}

export default CardGame;
