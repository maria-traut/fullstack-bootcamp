"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useFavoritesStore from "@/components/store/useFavoritesStore";
import type { Snippet } from "@/lib/services/snippetsService";

export default function FavoritesPage() {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/snippets")
      .then((response) => response.json())
      .then((data: Snippet[]) => setSnippets(data))
      .finally(() => setIsLoading(false));
  }, []);

  const favoriteSnippets = snippets.filter((snippet) =>
    favoriteIds.includes(snippet.id),
  );

  return (
    <>
      <h2>My Favorite Snippets</h2>
      {isLoading ? (
        <p>Loading ...</p>
      ) : favoriteSnippets.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favoriteSnippets.map((snippet) => (
            <li key={snippet.id}>
              <Link href={`/snippets/${snippet.id}`}>
                {snippet.title} ({snippet.language})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
