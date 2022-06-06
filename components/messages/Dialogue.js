import { Text, View, StyleSheet, TextInput, Image } from "react-native";
const Dialogue = () => {
  return (
    <View style={style.container}>
      <View style={style.navbar}>
        <Text style={style.title}>{'Ouais le monde est mechant'}</Text>
        <View style={style.btnMessage}>
          <Image source={{uri: "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-next-mintab-for-ios-becris-lineal-becris.png"}} />
          {/* <button><Image src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-next-mintab-for-ios-becris-lineal-becris.png" /></button> */}
        </View>
      </View>

      <View style={style.contentMessage}>
        <Text style={style.date}>Aujourd'hui</Text>
        <View>
          <Text style={style.titleChat}>Cheikhna-snap</Text>
          <Text style={style.messageBox}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            amet commodi, illo iusto tenetur, voluptate quod, reiciendis ducimus
            totam omnis odio? Veniam consequatur, sequi atque accusamus
            obcaecati itaque quidem numquam natus deleniti consectetur molestias
            quasi labore necessitatibus reprehenderit in est.
          </Text>
        </View>
      </View>

      <View style={style.footer}>
        <View style={style.btnMessage}>
          <Image source={{ uri: "https://img.icons8.com/material-rounded/24/000000/camera--v1.png" }} />
          {/* <button><Image src="https://img.icons8.com/material-rounded/24/000000/camera--v1.png" /></button> */}
        </View>
        <View style={style.inputBox}>
          <TextInput style={style.input} />
        </View>
        <View style={style.btnMessage}>
          <Image source={{ uri: "https://img.icons8.com/pastel-glyph/64/000000/image--v1.png" }} />
          {/* <button><Image src="https://img.icons8.com/pastel-glyph/64/000000/image--v1.png" /></button> */}
        </View>
      </View>
    </View>
  );
};
export default Dialogue;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
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

  contentMessage: { height: "100%" },
  inputBox: {
    width: "100%",
  },
  input: { width: "100%" },
  messageBox: { borderLeftWidth: 2, borderColor: "blue", padding: 5 },
  titleChat: { color: "blue" },
  messageP: { margin: 0 },
});
