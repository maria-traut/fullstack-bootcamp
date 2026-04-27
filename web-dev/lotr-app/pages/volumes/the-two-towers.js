import { volumes } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1 style={{ color: volume.color }}>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image alt={volume.title} src={volume.cover} width={140} height={230} />
    </>
  );
}
