console.clear();
<<<<<<< HEAD
=======
/*
import { getRandomColor } from "./utils/randomColor.js";
>>>>>>> e0b649b979d63f5e18b8c467b6f25b60d0a7d480

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
<<<<<<< HEAD
  circle.style.backgroundColor = "#ccc";
=======
  const color = getRandomColor();
  circle.style.backgroundColor = color;
>>>>>>> e0b649b979d63f5e18b8c467b6f25b60d0a7d480
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
<<<<<<< HEAD
  square.style.backgroundColor = "#ccc";
=======
  const color = getRandomColor();
  square.style.backgroundColor = color;
>>>>>>> e0b649b979d63f5e18b8c467b6f25b60d0a7d480
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
<<<<<<< HEAD
  pentagon.style.backgroundColor = "#ccc";
});

root.append(circle, square, pentagon);
=======
  const color = getRandomColor();
  pentagon.style.backgroundColor = color;
});

root.append(circle, square, pentagon);

*/
// Task 2

import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
>>>>>>> e0b649b979d63f5e18b8c467b6f25b60d0a7d480
