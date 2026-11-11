export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return <span>{isHappy ? "🙂" : "😕"}</span>;
}
