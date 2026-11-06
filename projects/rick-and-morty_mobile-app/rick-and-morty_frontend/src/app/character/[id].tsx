import { Character } from "@/types/character.types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
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

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.status}>{character.status}</Text>
      <Text>{character.species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#c6eed0",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  status: {
    fontStyle: "italic",
  },
});
