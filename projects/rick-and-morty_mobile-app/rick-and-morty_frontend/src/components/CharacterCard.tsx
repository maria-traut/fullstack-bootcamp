import { Colors } from "@/constants/colors";
import type { Character } from "@/types/character.types";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type Props = {
  character: Character;
  variant?: "grid" | "detail";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const STATUS_COLORS: Record<string, string> = {
  Alive: "#4caf50",
  Dead: "#e53935",
  unknown: "#9e9e9e",
};

export default function CharacterCard({
  character,
  variant = "grid",
  onPress,
  style,
}: Props) {
  const isDetail = variant === "detail";
  const scheme = useColorScheme();
  const color = Colors[scheme === "dark" ? "dark" : "light"];
  const text = { color: color.cardText };

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={[
        styles.card,
        {
          backgroundColor: color.cardBackground,
          borderColor: color.cardBorder,
          boxShadow: `0 0 8px 0 ${color.cardGlow}`,
        },
        style,
      ]}
    >
      <Image
        source={{ uri: character.image }}
        style={isDetail ? styles.imageDetail : styles.image}
      />
      <View style={isDetail ? styles.bodyDetail : styles.body}>
        <Text
          style={[isDetail ? styles.nameDetail : styles.name, text]}
          numberOfLines={isDetail ? undefined : 1}
        >
          {character.name}
        </Text>

        <View style={styles.statusRow}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  STATUS_COLORS[character.status] ?? STATUS_COLORS.unknown,
              },
            ]}
          />
          <Text style={[styles.status, text]} numberOfLines={1}>
            {character.status} · {character.species}
          </Text>
        </View>

        <Text style={[styles.label, text]}>Gender</Text>
        <Text style={[styles.value, text]}>{character.gender}</Text>

        <Text style={[styles.label, text]}>Last known location</Text>
        <Text style={[styles.value, text]} numberOfLines={2}>
          {character.location.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 0.5,
    overflow: "hidden",
  },
  image: { width: "100%", aspectRatio: 1 },
  imageDetail: {
    width: 280,
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 12,
  },
  bodyDetail: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  nameDetail: { fontSize: 26, fontWeight: "700" },
  body: { paddingHorizontal: 10, paddingTop: 8, paddingBottom: 12 },
  name: { fontSize: 16, fontWeight: "700" },
  statusRow: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  status: { fontSize: 13, fontWeight: "500" },
  label: {
    fontSize: 11,
    opacity: 0.6,
    marginTop: 8,
    textTransform: "uppercase",
  },
  value: { fontSize: 13 },
});
