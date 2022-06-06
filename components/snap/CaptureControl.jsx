import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const captureSize = Math.floor(WINDOW_HEIGHT * 0.08);

const CaptureControl = ({
  isCameraReady,
  switchCamera,
  chooseImg,
  recordVideo,
  stopVideoRecording,
  takePicture,
}) => {
  return (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Ionicons
          name="camera-reverse-outline"
          size={30}
          color="#fff"
        ></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
      <TouchableOpacity disabled={!isCameraReady} onPress={chooseImg}>
        <MaterialIcons
          name="photo-library"
          size={30}
          color="#fff"
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
};

export default CaptureControl;

const styles = StyleSheet.create({
  control: {
    position: "absolute",
    flexDirection: "row-reverse",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "transparent",
    borderWidth: 6,
    borderColor: "white",
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
});
