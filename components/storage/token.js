import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
   return AsyncStorage.getItem("token")
}

export async function setToken(token) {
      return await AsyncStorage.setItem("token", JSON.stringify(token));
}

export async function removeToken() {
      return await AsyncStorage.removeItem("token");
}