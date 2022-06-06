import { Text, View, StyleSheet, Button, Image } from "react-native";
import github from "../assets/github.png";
const Accueil = ({navigation}) => {
    // let img ="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-snapchat-png-transparent.png";
  return (
    <View style={style.container}>
      <View style={style.logoSnap}>
        <Image style={style.img} source={github} />
      </View>
      <View style={style.contentBtn}>
        <Button
          onPress={() => navigation.navigate("login")}
          style={[style.loginBtn, style.authBtn]}
          title="Connexion"
        />
        <Button
          onPress={() => navigation.navigate("register")}
          style={[style.registerBtn, style.authBtn]}
          title="Inscription"
        />
      </View>
      <Button
        onPress={() => navigation.navigate("home")}
        style={[style.loginBtn, style.authBtn]}
        title="Home"
      />
    </View>
  );
};
export default Accueil;

const style = StyleSheet.create({
  img: {
    width: "100%",
  },
  container: {
    backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logoSnap: {
    width: 100,
  },
  contentBtn: { position: "absolute", bottom: "2%", display: "flex" },

  authBtn: { padding: 5, bordeRadius: 5 },

  loginBtn: { backgroundColor: "white" },
  registerBtn: {backgroundColor: "#3d3def"}
  
});
