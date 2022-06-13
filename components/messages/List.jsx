import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";
import { Ionicons } from "@expo/vector-icons";


const List = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useAuth();

  const fetchData = async (token) => {
    
    // console.log('user', user.token);
    // if (user.token) {
    try {
      const response = await axios.get("http://snapi.epitech.eu:8000/snaps", {
        headers: {
          token: token,
        },
      });

      // setData(response.data.data);
      const key = "from";

      const distinct = [
        ...new Map(
          response.data.data.map((item) => [item[key], item])
        ).values(),
      ];

      console.log("distinct", distinct);
      setData(distinct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(user.token);
  }, []);

  const getSnap = (from) => {
    navigation.navigate("Dialogue", { from: from });
  };

  const renderMessage = (item) => {
    return (
      <View style={styles.message}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => getSnap(item.from)}
        >
          <Ionicons name="person" size={30} color="#fff"></Ionicons>
          <Text
            style={[
              styles.messageText,
              { paddingLeft: 15, fontWeight: "bold" },
            ]}
          >
            {item.from}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Ionicons name="camera" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <FlatList
        style={styles.main}
        data={data}
        renderItem={({ item }) => renderMessage(item)}
        keyExtractor={(item) => item.snap_id}
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
    alignItems: "center",
    alignContent: "center",
    padding: 15,
    // backgroundColor:"red"
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageText: {
    fontSize: 14,
    color: "#e6e6e6",
  },
});