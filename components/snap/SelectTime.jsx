import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

export default function SelectTime({ setTime }) {
  const time = [];
  for (let i = 1; i <= 3600; i++) {
    time.push({ label: `${i} seconde`, value: i });
  }

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setTime(value)}
        items={time}
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        height: 80,
        width: "100%",
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 2,
  },
});
