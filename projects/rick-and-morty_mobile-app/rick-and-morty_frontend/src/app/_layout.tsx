import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="gallery" options={{ title: "Gallery" }} />
      <Stack.Screen
        name="character/[id]"
        options={{ title: "Character Details" }}
      />
    </Stack>
  );
}
