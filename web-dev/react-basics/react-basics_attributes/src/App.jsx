import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title"></h2>
      <label htmlFor="label__input">
        <input id="label__input"></input>
      </label>
      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started"
      >
        Ready to learn React?
      </a>
    </article>
  );
}
