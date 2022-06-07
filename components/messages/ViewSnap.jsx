import { Text, View, StyleSheet, FlatList } from "react-native";
import ShowSnap from "./ShowSnap";
import React, { useEffect, useState } from "react";
import axios from "axios";
const ViewSnap = ({ snapId }) => {
  //recup snap par l'id
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
      console.log("response", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={style.contentMessage}>
      <Text style={style.date}>Aujourd'hui</Text>
      <View>
        <Text style={style.titleChat}>Cheikhna-snap</Text>

        {/* 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet
          commodi, illo iusto tenetur, voluptate quod, reiciendis ducimus totam
          omnis odio? Veniam consequatur, sequi atque accusamus obcaecati itaque
          quidem numquam natus deleniti consectetur molestias quasi labore
          necessitatibus reprehenderit in est.
         */}
        <View style={style.messageBox}>
          <FlatList
            data={data}
            renderItem={({ item }) => <ShowSnap snapId={item.snap_id} />}
            keyExtractor={(item) => item.snap_id}
          />
        </View>
      </View>
    </View>
  );
};
export default ViewSnap;
const style = StyleSheet.create({
  contentMessage: { backgroundColor: "black", height: "100%" },
  btnMessage: { width: 30 },

  date: { textAlign: "center" },

  messageBox: { borderLeftWidth: 2, borderColor: "blue", padding: 5 },
  titleChat: { color: "blue" },
  messageP: { margin: 0 },
});
