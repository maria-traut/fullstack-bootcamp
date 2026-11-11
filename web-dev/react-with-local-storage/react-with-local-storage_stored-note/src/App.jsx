// import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [note, setNote] = useLocalStorageState("note", { deafultValue: " " });
  // const [note, setNote] = useState(" ");
  const [font, setFont] = useLocalStorageState("font", {
    defaultValue: "system-ui",
  });
  // const [font, setFont] = useState("system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
