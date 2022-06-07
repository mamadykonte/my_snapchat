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
import ClickViewMsg from "./ClickViewMsg";

const Snap = ({ navigation }) => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     // if (user.token) {
//     try {
//       const response = await axios.get("http://snapi.epitech.eu:8000/snaps", {
//         headers: {
//           token: "ohcu932SPYNuARbBprkcwzb4",
//         },
//       });
//         setData(response.data.data);
//         console.log("response", response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const getSnap = (from) => {
//     navigation.navigate("Dialogue", { from: from });
//   };

  return (
    <View style={styles.container}>
      <FlatList

        data={"data"}
        renderItem={({ item }) => <ClickViewMsg/>}
        keyExtractor={(item) => item.snap_id}
      />
    </View>
  );
};

export default Snap;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "blue",
    marginTop: 10,
    padding: 10,
  },
  snap: {
    flexDirection: "row",
    justifyContent: "start",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    margin: 8,
    alignItems: "center",
    padding: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageText: {
    fontSize: 14,
    color: "whitesmoke",
    fontWeight: "bold",
    paddingLeft: 8,
  },
});
