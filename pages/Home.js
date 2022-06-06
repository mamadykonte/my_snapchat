import { useState } from "react";
import Welcome from "../components/home/Welcome";
import HomePage from "../components/home/HomePage";
import { getToken } from "../components/storage/token";

const Home = ({ navigation }) => {
  // const [token, setToken] = useState(null);
  // (async () => {
  //   const token = await getToken();
  //   setToken(token);
  //   // navigation.nagator("home");
  // })();
  // console.log("token",token);
  return  <HomePage navigation={navigation}/> ;
};
export default Home;
