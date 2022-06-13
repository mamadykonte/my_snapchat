import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

import SendSearchBar from "./SendSearchBar";
import UserList from "../user/list";
import { useAuth } from "../auth/AuthContext";

const SendSnap = ({ path, time, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(null);
  const [user] = useAuth();

  useEffect(() => {
    data();
    console.log("useEffect", user.token);
  }, []);

  const data = async () => {
    try {
      if (user.token) {
        setToken(user.token);
        const res = await axios.get("http://snapi.epitech.eu:8000/all", {
          headers: {
            token: user.token,
          },
        });

        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.SearchBar}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={40}
                color="white"
              />
            </TouchableOpacity>

            <SendSearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </View>
          <View style={styles.display}>
            {!users ? (
              <ActivityIndicator size="large" />
            ) : (
              <UserList
                searchPhrase={searchPhrase}
                data={users}
                setClicked={setClicked}
                token={token}
                path={path}
                time={time}
                navigation={navigation}
              />
            )}
          </View>
          <Text style={styles.modalText}>Hello World!</Text>
        </View>
      </Modal>
      <Pressable
        style={styles.sendContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Envoyer à</Text>
        <Ionicons name="send" size={20} style={{ paddingLeft: 8 }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "yellow",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  SearchBar: {
    position: "absolute",
    top: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "90%",
  },
  display: {
    position: "absolute",
    top: 100,
    width: "100%",
  },
  sendContainer: {
    backgroundColor: "yellow",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default SendSnap;
