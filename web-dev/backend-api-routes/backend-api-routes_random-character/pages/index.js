import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    `/api/random-character`,
    fetcher,
  );
  const { firstName, lastName, twitterName, geohash } = character;
  if (isLoading) return <p>Loading ...</p>;
  if (!character) return <p>Error</p>;
  return (
    <>
      <h1>First Name: {firstName}</h1>
      <h2>Last Name: {lastName}</h2>
      <p>Twitter Name: {twitterName}</p>
      <p>Geohash: {geohash}</p>
    </>
  );
}

// or return: <pre>{JSON.stringify(character, null, 2)}</pre>;
// or return: <pre>{JSON.stringify(data, null, 4)}</pre>;
// JSON.stringify(value, replacer, space)
