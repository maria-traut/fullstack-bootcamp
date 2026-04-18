export default function App() {
  return <Greeting name="Rick" />;
}

function Greeting({ name }) {
  return <div>Hello, {name === "Morty" ? "Coach" : name}!</div>;
}
