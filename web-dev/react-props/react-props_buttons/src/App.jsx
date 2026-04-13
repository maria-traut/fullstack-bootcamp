export default function App() {
  return (
    <div>
      <Button
        color="salmon"
        text="i am a salmon colored button"
        onClick={handleClick}
      />
      <Button
        disabled
        color="darkblue"
        text="i am a darkblue button"
        onClick={handleClick}
      />
      <Button
        color="hotpink"
        text="i am a hotpink button"
        onClick={handleClick}
      />
      <Button
        backgroundColor="black"
        color="lightblue"
        text="i am a lightblue button"
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, backgroundColor, disabled, text, onClick }) {
  function handleClick(text) {
    console.log("You clicked me!");
  }
  return (
    <button
      onClick={() => alert(`You clicked me!`)}
      type="button"
      disabled={disabled}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
