import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const List = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // if (user.token) {
    try {
      const response = await axios.get("http://snapi.epitech.eu:8000/snaps", {
        headers: {
          token: "ohcu932SPYNuARbBprkcwzb4",
        },
      });
    
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log("dataUsers", data);
  }, []);

  const [msg] = useState([
    { id: 1, from: "Mom", content: "How are you" },
    { id: 2, from: "Dad", content: "Hello Ryan" },
    { id: 3, from: "Brother1", content: "Can I borrow $10" },
    { id: 4, from: "Brother2", content: "Can I borrow $2000" },
    { id: 5, from: "Dog", content: "Bark Bark" },
    { id: 6, from: "Cat", content: "Meow Meow" },
  ]);

  const renderMessage = (item) => {
    return (
      <View style={styles.message}>
        <View style={styles.item}>
          <Ionicons name="person" size={30} color="#fff"></Ionicons>
          <Text
            style={[
              styles.messageText,
              { paddingLeft: 10, fontWeight: "bold" },
            ]}
          >
            {item.from}
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="camera" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <FlatList
        style={styles.main}
        data={msg}
        renderItem={({ item }) => renderMessage(item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: "5%",
  },

  message: {
    color: "white",
    width: "100%",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  messageText: {
    fontSize: 14,
    color: "#e6e6e6",
  },
});
