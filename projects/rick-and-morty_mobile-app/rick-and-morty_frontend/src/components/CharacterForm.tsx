import type { Character } from "@/types/character.types";
import { useTheme } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import Camera from "./Camera";
import Ionicons from "@expo/vector-icons/Ionicons";

export type CharacterFormValues = Pick<
  Character,
  "name" | "status" | "species" | "image"
>;

type Props = {
  initialValues?: CharacterFormValues;
  intro: string;
  submitLabel: string;
  onSubmit: (values: CharacterFormValues) => Promise<void>;
};

const EMPTY: CharacterFormValues = {
  name: "",
  status: "",
  species: "",
  image: "",
};

export default function CharacterForm({
  initialValues = EMPTY,
  intro,
  submitLabel,
  onSubmit,
}: Props) {
  const { colors, dark } = useTheme();
  const inputStyle = [
    styles.input,
    { color: colors.text, borderColor: colors.border },
  ];
  const placeholderColor = dark ? "#8a8a8a" : "#888";
  const [name, setName] = useState(initialValues.name);
  const [status, setStatus] = useState(initialValues.status);
  const [species, setSpecies] = useState(initialValues.species);
  const [image, setImage] = useState(initialValues.image);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await onSubmit({ name, status, species, image });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown Error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View>
      <Text style={[styles.intro, { color: colors.text }]}>{intro}</Text>
      <TextInput
        style={inputStyle}
        placeholderTextColor={placeholderColor}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={inputStyle}
        placeholderTextColor={placeholderColor}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={inputStyle}
        placeholderTextColor={placeholderColor}
        placeholder="Species"
        value={species}
        onChangeText={setSpecies}
      />
      <View style={styles.imageRow}>
        <TextInput
          style={[inputStyle, styles.imageInput]}
          placeholderTextColor={placeholderColor}
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
        />
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed && { opacity: 0.6 },
          ]}
          onPress={() => setIsTakingPhoto((prev) => !prev)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={isTakingPhoto ? "Close camera" : "Open camera"}
        >
          {!isTakingPhoto ? (
            <Ionicons name="camera" size={25} color={colors.text as string} />
          ) : (
            <Ionicons name="close" size={25} color={colors.text as string} />
          )}
        </Pressable>
      </View>
      {isTakingPhoto && (
        <Camera
          onPhotoTaken={(uri) => {
            setImage(uri);
            setIsTakingPhoto(false);
          }}
        />
      )}
      {!isTakingPhoto && image ? (
        <Image
          source={{ uri: image }}
          style={styles.preview}
          resizeMode="cover"
        />
      ) : null}
      <Pressable
        onPress={handleSubmit}
        disabled={isSubmitting}
        style={({ pressed }) => [
          styles.button,
          (pressed || isSubmitting) && { opacity: 0.6 },
        ]}
      >
        <Text style={styles.buttonText}>{submitLabel}</Text>
        {error && <Text style={styles.error}>{error}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "#70c485",
    padding: 14,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageInput: {
    flex: 1,
    marginRight: 0,
  },
  iconButton: {
    paddingHorizontal: 12,
    marginRight: 10,
  },
  preview: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  intro: { fontSize: 16, margin: 10 },
  buttonText: { fontWeight: "bold", color: "#000" },
  error: { color: "#e53935", marginHorizontal: 10 },
});
