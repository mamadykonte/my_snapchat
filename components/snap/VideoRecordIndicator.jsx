import { View,Text, StyleSheet } from "react-native";
const VideoRecordIndicator = () => (
  <View style={styles.recordIndicatorContainer}>
    <View style={styles.recordDot} />
    <Text style={styles.recordTitle}>{"Recording..."}</Text>
  </View>
);

export default VideoRecordIndicator;

const styles = StyleSheet.create({

    recordIndicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        top: 25,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        opacity: 0.7,
    },
    recordTitle: {
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
    },
    recordDot: {
        borderRadius: 3,
        height: 6,
        width: 6,
        backgroundColor: "#ff0000",
        marginHorizontal: 5,
    },
})
