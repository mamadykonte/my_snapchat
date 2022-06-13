import {View, TouchableOpacity, StyleSheet, Button, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 

import SendSnap from "./SendSnap";

const sendSnapBar = ({ cancelPreview, path, time, navigation }) => (
  <View style={styles.containerCapture}>
    <View style={styles.files}>
      <TouchableOpacity
        onPress={cancelPreview}
        style={[styles.bgWhiteBorder, styles.right]}
      >
        <AntDesign name="download" color="white" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={cancelPreview} style={styles.bgWhiteBorder}>
        <AntDesign name="addfile" color="white" size={20} />
      </TouchableOpacity>
    </View>
    <SendSnap path={path} time={time} navigation={navigation} />
  </View>
);
export default sendSnapBar;

const styles = StyleSheet.create({
  containerCapture: {
    position: "absolute",
    height: 85,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    // opacity: 0.7,
    zIndex: 2,
  },
  files: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  bgWhiteBorder: {
    width: 60,
    // height: 30,
    borderRadius: 25,
    backgroundColor: "rgba(225, 225, 225, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 8,
    paddingTop: 8,
  },
  right: {
    right: 5,
  },
});
