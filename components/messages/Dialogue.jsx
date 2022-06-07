import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import ViewSnap from "./ViewSnap";

const Dialogue = () => {

  return (
    <View style={style.container}>
      <View style={style.navbar}>
        <Text style={style.title}>{"Ouais le monde est mechant"}</Text>
        <View style={style.btnMessage}>
          <Image
            source={{
              uri: "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-next-mintab-for-ios-becris-lineal-becris.png",
            }}
          />
        </View>
      </View>

      <ViewSnap /> 
      

      <View style={style.footer}>
        <View style={style.btnMessage}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-rounded/24/000000/camera--v1.png",
            }}
          />
        </View>
        <View style={style.inputBox}>
          <TextInput style={style.input} />
        </View>
        <View style={style.btnMessage}>
          <Image
            source={{
              uri: "https://img.icons8.com/pastel-glyph/64/000000/image--v1.png",
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Dialogue;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "black",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  btnMessage: { width: 30 },

  date: { textAlign: "center" },

  footer: { display: "flex" },

  inputBox: {
    width: "100%",
  },
  input: { width: "100%" },

  titleChat: { color: "blue" },
  messageP: { margin: 0 },
});
