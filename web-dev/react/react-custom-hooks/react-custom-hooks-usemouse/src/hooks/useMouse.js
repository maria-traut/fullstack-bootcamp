import { useState, useEffect } from "react";

export default function useMouse() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  // const [position, setPosition] = useState([0, 0]);
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
      // setPosition([event.clientX, event.clientY]);
    });
  });

  return [x, y];
  // return position;
}
