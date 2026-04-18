import { getRandomColor } from "./utils/random.Color.js";

export default function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    let color = getRandomColor();
    square.style.backgroundColor = color;
  });
  return square;
}
