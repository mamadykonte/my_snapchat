import { Video } from "expo-av";
import { StyleSheet } from "react-native";

const VideoPlayer = ({ videoSource }) => (
  <Video source={{ uri: videoSource }} shouldPlay={true} style={styles.media} />
);

export default VideoPlayer;

const styles = StyleSheet.create({
  media: {
    ...StyleSheet.absoluteFillObject,
  },
});
