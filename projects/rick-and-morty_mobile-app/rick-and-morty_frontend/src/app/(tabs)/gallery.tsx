import type { Character } from "@/types/character.types";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CharacterCard from "../../components/CharacterCard";
import { API_URL } from "../../constants/api";

export default function CharacterList() {
  const insets = useSafeAreaInsets();
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const json = await response.json();
        setCharacters(json);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    getCharacters();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#191e5f" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      contentContainerStyle={{
        padding: 12,
        gap: 12,
        paddingBottom: insets.bottom,
      }}
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ gap: 12 }}
      renderItem={({ item }) => (
        <CharacterCard
          character={item}
          style={{ flex: 1, maxWidth: "48%" }}
          onPress={() => router.push(`/character/${item.id}`)}
        />
      )}
    />
  );
}
