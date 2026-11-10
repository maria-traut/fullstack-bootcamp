import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "expo-router";
import { useRef, useState, type ComponentProps } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type HostInstance,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export type ActionMenuItem = {
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  destructive?: boolean;
};

type Props = {
  items: ActionMenuItem[];
  style?: StyleProp<ViewStyle>;
};

const DESTRUCTIVE = "#e53935";

export default function ActionMenu({ items, style }: Props) {
  const { colors } = useTheme();
  const { width: windowWidth } = useWindowDimensions();
  const buttonRef = useRef<HostInstance>(null);
  const pendingAction = useRef<(() => void) | null>(null);
  const [anchor, setAnchor] = useState<{ top: number; right: number } | null>(
    null,
  );

  function open() {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      setAnchor({ top: y + height + 6, right: windowWidth - (x + width) });
    });
  }

  function runPendingAction() {
    const action = pendingAction.current;
    pendingAction.current = null;
    action?.();
  }

  function select(item: ActionMenuItem) {
    pendingAction.current = item.onPress;
    setAnchor(null);
    if (Platform.OS !== "ios") runPendingAction();
  }

  return (
    <>
      <Pressable
        ref={buttonRef}
        onPress={open}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="More options"
        style={({ pressed }) => [
          styles.trigger,
          pressed && { opacity: 0.7 },
          style,
        ]}
      >
        <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
      </Pressable>

      <Modal
        visible={anchor !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setAnchor(null)}
        onDismiss={runPendingAction}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setAnchor(null)}
        />
        {anchor && (
          <View
            style={[
              styles.menu,
              {
                top: anchor.top,
                right: anchor.right,
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            {items.map((item, index) => {
              // DefaultTheme/DarkTheme colors are plain hex strings; the cast satisfies Ionicons.
              const tint = item.destructive
                ? DESTRUCTIVE
                : (colors.text as string);
              return (
                <Pressable
                  key={item.label}
                  onPress={() => select(item)}
                  accessibilityRole="menuitem"
                  style={({ pressed }) => [
                    styles.item,
                    index > 0 && {
                      borderTopWidth: StyleSheet.hairlineWidth,
                      borderTopColor: colors.border,
                    },
                    pressed && { backgroundColor: colors.border },
                  ]}
                >
                  <Ionicons name={item.icon} size={18} color={tint} />
                  <Text style={[styles.itemText, { color: tint }]}>
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  menu: {
    position: "absolute",
    minWidth: 170,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
    boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.25)",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  itemText: { fontSize: 16 },
});
