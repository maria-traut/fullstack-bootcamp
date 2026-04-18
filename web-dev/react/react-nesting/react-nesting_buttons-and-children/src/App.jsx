import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>hi, i'm button no 1</Button>
      <Button>hello, my dear</Button>
      <Button>hola chico</Button>
      <Button>bonjour, madame</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
