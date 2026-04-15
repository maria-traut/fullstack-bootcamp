import "./Card.css";

export default function Card({ name, backgroundColor }) {
  return <p className={`card card--${backgroundColor}`}>{name}</p>;
}
