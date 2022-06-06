import axios from "axios";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

import Users from "./Users";

import { useAuth } from "../auth/AuthContext";
const SnapListener = () => {
  // var config =
  const [search, setSearch] = useState("");
  const [userSearchs, setUserSearch] = useState([]);
  const [dataUsers, SetDataUsers] = useState([]);
  const [users, setUsers] = useState(null);
  const [user] = useAuth();

  useEffect(() => {
    console.log("user", user);

    fetchData();
    console.log("dataUsers", users);
  }, []);

  const fetchData = () => {
    // if (user.token) {
      axios({
        method: "get",
        url: "http://snapi.epitech.eu:8000/snaps",
        headers: {
          token: "ohcu932SPYNuARbBprkcwzb4",
        },
      })
        .then((response) => {
          console.log(response);
          SetDataUsers(response.data.data);
          setUsers(response.data.data);
        })
        .catch((error) => console.log(error));
    }
  // };
  return (
    <View>
      <Text>click</Text>
      <ScrollView>
        <View style={style.nav}>
          <Text>click</Text>
          <TextInput onChangeText={(e) => vaChercher(e)} />
        </View>
        <View>
          {users.map((user, key) => (
            <Users key={key} user={user.from} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default SnapListener;

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
