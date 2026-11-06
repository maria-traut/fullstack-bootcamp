import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types/character.types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { API_URL } from "../../constants/api";

export default function CharacterDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const json = await response.json();
        setCharacter(json);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    getCharacter();
  }, [id]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#191e5f" />;
  }

  if (error || !character) {
    return <Text>{error ?? "Character not found"}</Text>;
  }

  return <CharacterCard character={character} style={{ margin: 16 }} />;
}
