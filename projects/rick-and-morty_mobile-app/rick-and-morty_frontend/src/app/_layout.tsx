import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { NavigationBar } from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  // The Android navigation bar is transparent (enforceContrast: false),
  // so the root view background shows through it. Match the tab bar (colors.card).
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.card);
  }, [theme]);

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="character/[id]"
          options={{ title: "Character Details" }}
        />
        <Stack.Screen name="edit/[id]" options={{ title: "Edit Character" }} />
      </Stack>

      <StatusBar style="auto" />
      <NavigationBar style="auto" />
    </ThemeProvider>
  );
}
