
import AuthComponent from "../components/auth/Authentification";
import axios from "axios";
import { setToken } from "../components/storage/token";
import { useAuth } from "../components/auth/AuthContext";

const Login = () => {

  const [_, setUser] = useAuth();

  const userLogin = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      const userData = await response.data.data;
        console.log(userData);
       
      await setToken(userData);
        setUser(userData);
        
      }
    catch (error) {
        console.log(error);
      };
  };
  return (
    <AuthComponent
      title={"Connexion"}
      AuthConfig={userLogin}
      root="/connection"
    />
  );
};
export default Login;
