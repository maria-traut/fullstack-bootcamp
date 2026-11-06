import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Whoop Whoop!</Text>
      <Link href="/gallery" style={styles.button}>
        See Gallery
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#c6eed0",
    padding: 10,
    borderRadius: 15,
  },
});
