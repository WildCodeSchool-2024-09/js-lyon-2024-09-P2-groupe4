import { useState } from "react";
import ButtonsBar from "./ButtonsBar";
import CardGame from "./CardGame";

// const game = {
//   id: 305,
//   title: "Fiesta Online",
//   thumbnail: "https://www.mmobomb.com/g/305/thumbnail.jpg",
//   short_description:
//     "Fiesta Online is a free to play 3D cartoon style MMORPG with simple gameplay, cell-shaded graphics, regular updates, and now with a browser version. The game combines easy to learn controls with the accustomed depth of an online role-playing game, which makes it suitable for beginners and experienced players alike.",
//   game_url: "https://www.mmobomb.com/open/fiesta-online",
//   genre: "MMORPG",
//   platform: "PC (Windows)",
//   publisher: "gamigo AG",
//   developer: "Onson Soft",
//   release_date: "2008-02-01",
//   profile_url: "https://www.mmobomb.com/fiesta-online",
// };

function FavoritesList() {
  const [like, setLike] = useState(false);

  return (
    <>
      <CardGame />
      <ButtonsBar like={like} setLike={setLike} />
    </>
  );
}

export default FavoritesList;
