import { SwitchColors } from "@/constants/colors";
import { useTheme } from "expo-router";
import {
  Appearance,
  StyleSheet,
  Switch,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function Settings() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: SwitchColors.trackOff, true: SwitchColors.trackOn }}
          thumbColor={isDark ? SwitchColors.thumbOn : SwitchColors.thumbOff}
          ios_backgroundColor={SwitchColors.iosBackground}
          value={isDark}
          onValueChange={(value) =>
            Appearance.setColorScheme(value ? "dark" : "light")
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: { fontSize: 18 },
});
