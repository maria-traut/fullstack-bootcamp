import { cards } from "../../lib/cards.js";
import { Card } from "../CardList/Card.js";

export function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
