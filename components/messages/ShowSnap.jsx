import React, { useState,useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShowSnap = ({ snapId,token }) => {
  const [modalVisible, setModalVisible] = useState(false);
    const [snapPath, setSnapPath] = useState(null);
    const [duration, setDuration] = useState(null);
    const [load, setLoad] = useState(true);

  const fetchSnap = async (token) => {
    const config = {
      headers: {
        token: token,
        //'Content-Type': 'multipart/form-data',
        responseType: "blob",
      },
    };

    const res = await fetch(`http://snapi.epitech.eu:8000/snap/${snapId}`, config);
    const blob = await res.blob();
    const imageURL = URL.createObjectURL(blob);
      setSnapPath(imageURL);
      setLoad(false);
  };

  useEffect(() => {
    fetchSnap();
    console.log(snapPath, "path");
  }, [snapPath]);
  return (
    <View style={[styles.centeredView, styles.container]}>
      <Modal
        // style={styles.container}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => setModalVisible(!modalVisible)}
          >
            {!load ? (
              <Image
                style={styles.img}
                source={{
                  uri: snapPath,
                }}
              />
            ) : (
              <ActivityIndicator size="large" color="white" />
            )}
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.snap}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="square" size={30} color="purple"></Ionicons>
        <Text style={styles.messageText}>Appuyer pour voir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: "5%",
    elevation: 5,
  },

  img: {
    // flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover",
  },
  buttonCancel: {
    // backgroundColor: "grey",
    width: "100%",
      height: "100%",
      justifyContent: "center",
    
  },
  snap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "start",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
    color: "white",
    margin: 8,
    alignItems: "center",
    padding: 5,
  },
  messageText: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 8,
    color:"whitesmoke"
  },
});

export default ShowSnap;
