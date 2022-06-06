import { Text, TextInput, View, StyleSheet, Button, Image, Pressable } from "react-native";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const Users = ({ user }) => {
    console.log("user", user);
     const email = user.email
    const name = email.split("@")[0];
    // console.log(name);
    const envoie = () => {
        alert('snap envoyer a '+ name)
        navigate("message");
    }
    return (
        <View >
            <Pressable onPress={() => envoie()} style={style.user}>
                <Text>
                    <Icon name="person" />
                </Text>
                <Text>{name}</Text>
            </Pressable>
        </View>
    )
}
export default Users;

const style = StyleSheet.create({
    user: {
        flexDirection: "row",
        // alignItems: "center",
        padding: 10,
        backgroundColor: "grey",
        marginBottom: 20
    }
});
