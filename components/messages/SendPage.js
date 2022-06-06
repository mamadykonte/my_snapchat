import axios from "axios";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
// import {  } from "react-native-web";
import React, { useState, useEffect } from "react";

import Users from "./Users";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SendPage = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [userSearchs, setUserSearch] = useState([]);
  const [dataUsers, SetDataUsers] = useState([]);
  const [users, setUsers] = useState(dataUsers);
    const [token, setToken] = useState(null);
//   console.log("token", AsyncStorage.getItem("token"));
  const config = {
    method: "get",
    url: "http://snapi.epitech.eu:8000/all",
    headers: {
      token: token,
    },
  };
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => setToken(token)).catch(err => console.log(err));

    axios(config)
      .then((response) => {
        SetDataUsers(response.data.data);
        setUsers(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const vaChercher = (e) => {
    // console.log(e.length);
    setSearch(e);
    setUserSearch(
      dataUsers.filter((username) => username.email.includes(search))
    );
    if (e.length > 0) {
      console.log("commence");
      console.log(userSearchs);
      setUsers(userSearchs);
    } else {
      console.log("lose");
      setUsers(dataUsers);
    }
    // console.log(userSearchs);
  };
  // console.log(users);
  return (
    <ScrollView>
      <View>
        <View style={style.nav}>
          <Text>click</Text>
          <TextInput onChangeText={(e) => vaChercher(e)} />
        </View>
        <View>
          {users.map((user, key) => (
            <Users key={key} user={user} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default SendPage;
const style = StyleSheet.create({
  // <Component title={} />
  input: {
    borderWidth: 1,
    backgroundColor: "blue",
  },
  nav: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-between",
  },
});
