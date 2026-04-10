import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>React Basics</h1>
      <p>This is the first p tag content.</p>
      <p>This is the second p tag content.</p>
      <button>Show energy level</button>
    </article>
  );
}
