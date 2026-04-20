import "./Cursor.css";
import useMouse from "../hooks/useMouse";

export default function Cursor() {
  const [x, y] = useMouse();
  // const [x, y] = [200, 100];
  return (
    <div className="cursor">
      <div className="cursor__horizontal" style={{ top: `${y}px` }}></div>
      <div className="cursor__vertical" style={{ left: `${x}px` }}></div>
    </div>
  );
}
