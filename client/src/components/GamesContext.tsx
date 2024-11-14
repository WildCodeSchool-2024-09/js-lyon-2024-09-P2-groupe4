import { createContext, useContext, useEffect, useState } from "react";
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
const GamesContext = createContext<Game[]>([]);
export const useGames = () => useContext(GamesContext);
export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [games, setGames] = useState<Game[]>([]);
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
  return (
    <GamesContext.Provider value={games}>{children}</GamesContext.Provider>
  );
};
