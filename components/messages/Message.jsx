import { StyleSheet, View, Text } from "react-native";
import React from "react";
import List from "./List";

const Message = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Chat</Text>
      <List navigation = {navigation}/>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "15%",
    },
});
