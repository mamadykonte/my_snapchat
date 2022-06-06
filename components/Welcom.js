import { Text, View } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome = ({ navigation }) => {
    const user = AsyncStorage.getItem("user");
    const userName = user.email.split("@")[0];
    console.log(userName);
    // const [permission, setPermisson] = useState('');
    const accept = () => {
        AsyncStorage.settItem("permission", "accept");
        navigation.navigate("Home")
    }
    return (
        <View>
            <Text>Bienvenue </Text>
            <Text>En cliquant sur Suivant vous autoriser </Text>
        </View>
      );
};
export default Welcome;