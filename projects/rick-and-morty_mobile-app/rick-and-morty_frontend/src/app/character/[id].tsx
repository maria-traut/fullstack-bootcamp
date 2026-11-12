import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types/character.types";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  useTheme,
} from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, Alert, Text } from "react-native";
import { API_URL } from "../../constants/api";

export default function CharacterDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function getCharacter() {
        try {
          const response = await fetch(`${API_URL}/${id}`);
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          const json = await response.json();
          setCharacter(json);
          setError(null);
        } catch (error) {
          setError(error instanceof Error ? error.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      }
      getCharacter();
    }, [id]),
  );

  function confirmDelete() {
    if (!character) return;
    Alert.alert("Delete character?", `${character.name} is being deleted.`, [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: handleDelete },
    ]);
  }

  async function handleDelete() {
    if (!character) return;
    try {
      const response = await fetch(`${API_URL}/${character.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Error ${response.status}`);
      router.back();
    } catch (error) {
      Alert.alert(
        "Delete failed",
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  if (error || !character) {
    return (
      <Text style={{ color: colors.text, margin: 16 }}>
        {error ?? "Character not found"}
      </Text>
    );
  }

  return (
    <CharacterCard
      character={character}
      variant="detail"
      onEdit={() => router.push(`/edit/${character.id}`)}
      onDelete={confirmDelete}
      style={{ margin: 16 }}
    />
  );
}
