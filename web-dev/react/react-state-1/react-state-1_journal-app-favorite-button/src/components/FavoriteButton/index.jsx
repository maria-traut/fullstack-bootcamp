import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  // function handleClickButton() {
  // setIsFavorite(!isFavorite);
  // }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        //console.log("favorite button clicked");
        setIsFavorite(!isFavorite);
      }}
      //onClick={handleClickButton};
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
