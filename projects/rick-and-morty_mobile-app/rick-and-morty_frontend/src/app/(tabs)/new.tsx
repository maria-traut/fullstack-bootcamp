import CharacterForm, { CharacterFormValues } from "@/components/CharacterForm";
import { API_URL } from "@/constants/api";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateCharacter() {
  const [formKey, setFormKey] = useState(0);

  async function handleCreate(values: CharacterFormValues) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) throw new Error(`Error ${response.status}`);
    setFormKey((k) => k + 1);
    router.push("/gallery");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <CharacterForm
          key={formKey}
          intro="Add a new character to the gallery"
          submitLabel="Create character"
          onSubmit={handleCreate}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
