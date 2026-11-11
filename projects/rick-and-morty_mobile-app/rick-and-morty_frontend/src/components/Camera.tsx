import { Asset, usePermissions } from "expo-media-library";
import { Pressable, StyleSheet, Switch, Text, Image, View } from "react-native";
import { useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useTheme } from "expo-router";
import { SwitchColors } from "@/constants/colors";

type Props = {
  onPhotoTaken?: (uri: string) => void;
};

export default function Camera({ onPhotoTaken }: Props) {
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [mediaPermission, requestMediaPermission] = usePermissions({
    granularPermissions: ["photo"],
  });

  if (!cameraPermission) return null;
  if (!cameraPermission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={[styles.permissionText, { color: colors.text }]}>
          We need access to your camera, to take a photo.
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={requestCameraPermission}
        >
          <Text style={styles.buttonText}>Allow camera</Text>
        </Pressable>
      </View>
    );
  }

  function toggleSwitch() {
    setIsEnabled(!isEnabled);
  }

  async function handleTakePicture() {
    try {
      const photo = await cameraRef.current?.takePictureAsync({
        quality: 0.7, // Compress slightly for better performance
        base64: false,
        exif: false,
        shutterSound: false,
      });
      if (photo?.uri) {
        setPhotoUri(photo.uri);
        if (!mediaPermission?.granted) {
          const { granted } = await requestMediaPermission();
          if (!granted) {
            console.warn("Media library permission denied, photo not saved");
            onPhotoTaken?.(photo.uri);
            return;
          }
        }
        const asset = await Asset.create(photo.uri); // copies the photo into the phone's gallery and returns an Asset object
        console.log("Photo saved to gallery");
        onPhotoTaken?.(await asset.getUri()); // asks for the gallery adress of that photo
      }
    } catch (error) {
      console.error("Error taking photo:", error);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        facing={isEnabled ? "front" : "back"}
        style={styles.camera}
      />
      <View style={styles.controlsRow}>
        <View style={styles.switchSide}>
          <Switch
            trackColor={{
              false: SwitchColors.trackOff,
              true: SwitchColors.trackOn,
            }}
            thumbColor={
              isEnabled ? SwitchColors.thumbOn : SwitchColors.thumbOff
            }
            ios_backgroundColor={SwitchColors.iosBackground}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.switchLabel, { color: colors.text }]}>
            {isEnabled ? "Front" : "Back"}
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.shutterOuter,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleTakePicture}
          accessibilityRole="button"
          accessibilityLabel="Take photo"
        >
          <View style={styles.shutterInner} />
        </Pressable>
        <View style={styles.spacer} />
      </View>
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={styles.preview}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  permissionContainer: {
    alignItems: "center",
    padding: 24,
  },
  permissionText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#70c485",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  switchSide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  switchLabel: {
    fontSize: 14,
  },
  spacer: {
    flex: 1,
  },
  shutterOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 4,
    borderColor: "#70c485",
    alignItems: "center",
    justifyContent: "center",
  },
  shutterInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#70c485",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#1a1a1a",
    fontWeight: "600",
    fontSize: 16,
  },
  container: {
    marginHorizontal: 10,
  },
  camera: {
    height: 300,
    borderColor: "#70c485",
    borderWidth: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  preview: {
    width: "100%",
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
  },
});
