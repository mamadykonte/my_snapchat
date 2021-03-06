import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import ShowSnap from "./ShowSnap";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const ClickViewMsg = ({ snapId }) => {
//   const [snapPath, setSnapPath] = useState(null);

  const [user, setUser] = useAuth();
  
    const fetchSnap = async () => {
      // let token = "ohcu932SPYNuARbBprkcwzb4";
      let token = user.token;

      const config = {
        headers: {
          token: token,
          //'Content-Type': 'multipart/form-data',
          responseType: "blob",
        },
      };
      const url = "http://snapi.epitech.eu:8000/snap/" + snapId;
      const res = await fetch(url, config);
      const blob = await res.blob();
      const imageURL = URL.createObjectURL(blob);
        setSnapPath(imageURL);
    //   console.log(objectURL)

    //   navigation.navigate("RenderSnap", {
    //     image: objectURL,
    //     duration: duration,
    //     id: id,
    //   });
    };
        
  return <ShowSnap snapId={snapId} token={user.token}  />;
};
export default ClickViewMsg;


