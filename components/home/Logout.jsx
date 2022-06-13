import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { removeToken } from "../storage/token";
import { useAuth } from "../auth/AuthContext";

const Logout = () => {
  const [user, setUser] = useAuth();

  const deleteToken = async () => {
    await removeToken();
    setUser(null);
  };


  return (
    <TouchableOpacity style={styles.container} onPress={deleteToken}>
      <Feather name="log-out" size={35} color="red" />
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 60,
        right: 20,
        backgroundColor:"transparent"
    }
})
       
