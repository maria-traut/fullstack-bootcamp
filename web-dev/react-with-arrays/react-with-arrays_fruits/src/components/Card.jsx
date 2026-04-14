import "./Card.css";

export default function Card({ id, name }) {
  const fruits = [
    { id: 1, name: "🍍 pineapple", color: "yellow" },
    { id: 2, name: "🍓 strawberry", color: "red" },
    { id: 3, name: "🫐 blueberry", color: "purple" },
    { id: 4, name: "🍐 pear", color: "yellow" },
    { id: 5, name: "🍉 watermelon", color: "green" },
  ];
  return (
    <p className="card">
      {fruits.map((fruit) => (
        <li key={fruit.id} color={fruit.color}>
          {fruit.name}
        </li>
      ))}
    </p>
  );
}
