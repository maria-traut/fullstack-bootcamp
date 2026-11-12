import "./Tab.css";

export default function Tab({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`tab${isActive ? " tab--active" : ""}`}
    >
      {children}
    </button>
  );
}
