// import {useState} from "react";
import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  BackHandler,
} from "react-native";
import RNExitApp from "react-native-exit-app";
const AuthComponent = ({ title, dataLogin }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // dataLogin.password = password;
  // dataLogin.email = email;
  // console.log(dataLogin);
  // console.log(email,password);

  return (
    <View style={style.container}>
      <View style={style.formBox}>
        <Text style={style.title}>{title}</Text>
        <View style={style.inputBox}>
          <Text style={style.label}>ADRESSE E-MAIL</Text>
          <View>
            <TextInput onChangeText={(e) => setEmail(e)} style={style.input} />
          </View>
        </View>
        <View style={style.inputBox}>
          <Text style={style.label}>MOT DE PASSE</Text>
          <TextInput onChangeText={(e) => setPassword(e)} style={style.input} />
        </View>
      </View>
      <Button
        style={style.btnLogin}
        title="Se connecter"
        //onPress={() => BackHandler.exitApp()}
      />
      <Button
        style={style.btnLogin}
        title="Exit"
        onPress={() => { RNExitApp.exitApp()
        }}
      />
    </View>
  );
};
export default AuthComponent;

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  label: { color: "#0091ff" },

  input: {
    borderBottomWidth: 1,
  },

  title: { fontSize: 24, textAlign: "center", margin: 20 },

  formBox: {},
  inputBox: {
    marginBottom: 10,
  },
  btnLogin: {
    position: "absolute",
    bottom: " 2%",
    padding: "7px 20px",
    borderRadius: 15,
    backgroundColor: "#5c5c5ccf",
    color: "white",
  },
});
