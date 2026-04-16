import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  // console.log(people);

  function handleIncrement() {
    setPeople(people + 1);
    // return <Counter people={people} onIncrement={handleIncrement} />;
  }

  function handleDecrement() {
    setPeople(people - 1);
    // return <Counter people={people} onDecrement={handleDecrement} />;
  }

  // Wo wird der aktuelle people.value gestored???

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
