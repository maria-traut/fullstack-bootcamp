import type { Character } from "@/types/character.types";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/character/${character.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>{character.status}</Text>
        <Text>{character.species}</Text>
      </Pressable>
    </Link>
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
    width: 150,
    height: 150,
    borderRadius: 75,
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
