import { useTheme } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.h1, { color: colors.text }]}>Welcome to</Text>
      <Text style={[styles.h1, { color: colors.text }]}>My Fabulous</Text>
      <Text style={[styles.h1, { color: colors.text }]}>Rick & Morty App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    fontSize: 40,
    textAlign: "center",
  },
});
