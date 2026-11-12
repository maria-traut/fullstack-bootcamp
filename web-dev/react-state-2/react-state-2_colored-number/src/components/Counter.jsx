import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    return <Counter count={count} onIncrement={handleIncrement} />;
  }
  // console.log("handleIncrement in Counter: ", handleIncrement);

  function handleDecrement() {
    setCount(count - 1);
    return <Counter count={count} onDecrement={handleDecrement} />;
  }
  // console.log("handleDecrement in Counter: ", handleDecrement);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
