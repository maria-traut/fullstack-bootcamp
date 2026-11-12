import { Character } from "@/types/character.types";
import { router, useLocalSearchParams, useTheme } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { API_URL } from "../../constants/api";
import CharacterForm, {
  type CharacterFormValues,
} from "@/components/CharacterForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CharacterUpdate() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleUpdate(values: CharacterFormValues) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) throw new Error(`Error ${response.status}`);
    router.back();
  }

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
    <SafeAreaView>
      <ScrollView>
        <CharacterForm
          initialValues={{
            name: character.name,
            status: character.status,
            species: character.species,
            image: character.image,
          }}
          intro={`Update ${character.name}`}
          submitLabel="Save changes"
          onSubmit={handleUpdate}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
