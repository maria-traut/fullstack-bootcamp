import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [offset]);

  return (
    <main>
        <button type="button"
        onClick={() {
          const nextOffset = offset - 20;
        if (nextOffset <= 0) {
          setOffset(0);
        return;
      }
    setOffset(nextOffset);
  }}
disabled={offset <= 0}
>
          Previous Page
        </button>
        <button type="button" onClick={() => setOffset(offset + 20)}>
          Next Page
        </button>
        <ul>
          {pokemon.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
    </main>
  );
}

// page <= 1 ?"disable" : => setPage page.previous</>
