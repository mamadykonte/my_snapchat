import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CancelPreviewButton = ({ cancelPreview }) => (
  <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
    <MaterialIcons name="cancel" size={40} color="red" />
  </TouchableOpacity>
);

export default CancelPreviewButton;

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 60,
    left: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    zIndex: 2,
  },
});
