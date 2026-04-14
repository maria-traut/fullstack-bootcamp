import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 2, name: "🍓 strawberry", color: "salmon" },
    { id: 1, name: "🍍 pineapple", color: "yellow" },
    { id: 3, name: "🫐 blueberry", color: "violet" },
    { id: 4, name: "🍐 pear", color: "lightyellow" },
    { id: 5, name: "🍉 watermelon", color: "lightgreen" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruits.id} color={fruit.color} name={fruit.name} />
      ))}
    </div>
  );
}
