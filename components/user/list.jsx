import React from "react";
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Item = ({ email, path, token, time, navigation }) => {
  const name = email.split("@")[0];
  const envoie = () => {
    console.log("snap envoyer a " + email);

    let data = new FormData();
    data.append("duration", time);
    data.append("to", email);
    data.append("image", {
      uri: path, // your file path string
      name: `image${Math.floor(Math.random() * 1000000000000)}.jpg`,
      type: "image/jpg",
    });

    const config = {
      method: "post",
      url: "http://snapi.epitech.eu:8000/snap",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        token: token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    navigation.navigate("Dialogue");
  };

  return (
    <TouchableOpacity onPress={envoie}>
      <View style={styles.item}>
        <View style={{ paddingRight: 10 }}>
          <Ionicons name="person" size={30} color="white" />
        </View>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    if (props.searchPhrase === "") {
      return <Item email={item.email} path={props.path} token={props.token}  time={props.time} navigation={props.navigation}/>;
    }
    if (
      item.email
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item email={item.email} path={props.path} token={props.token} time={props.time} navigation={props.navigation}/>;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    color: "whitesmoke",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: "whitesmoke",
  },
  details: {
    color: "whitesmoke",
  },
});
