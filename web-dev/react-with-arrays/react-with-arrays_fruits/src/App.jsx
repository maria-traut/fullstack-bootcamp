import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 2, name: "🍓 strawberry", color: "red" },
    { id: 1, name: "🍍 pineapple", color: "yellow" },
    { id: 3, name: "🫐 blueberry", color: "purple" },
    { id: 4, name: "🍐 pear", color: "yellow" },
    { id: 5, name: "🍉 watermelon", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} backgroundColor={fruit.color} name={fruit.name} />
      ))}
    </div>
  );
}
