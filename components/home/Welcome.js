import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Pressable, TouchableHighlight } from "react-native";
const Welcome = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.logoSnap}>
        <Image style={style.img} source={{ uri: "https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-snapchat-png-transparent.png" }} />
      </View>
      <View style={style.contentBtn}>
        <TouchableOpacity style={[style.loginBtn, style.authBtn]} onPress={() => navigation.navigate('Login')}>
          <Text>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.registerBtn, style.authBtn]} onPress={() => navigation.navigate('Register')}>
          <Text>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Welcome;

const style = StyleSheet.create({
  img: {
    // flex: 1,
    
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "yellow",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
  },
  logoSnap: {
    width: 120,
    height: 120,
    
  },
  contentBtn: { position: "absolute", bottom: "5%", flexDirection: "row" },

  authBtn: { padding: 10, borderRadius: 5 },

  loginBtn: { backgroundColor: "white", marginRight: 10 },
  registerBtn: { backgroundColor: "#3d3def" }

});
