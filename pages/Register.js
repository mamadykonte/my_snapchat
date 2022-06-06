import AuthComponent from "../components/auth/Authentification";
import axios from 'axios';

const Register = ({ navigation }) => {
  
  const [_, setUser] = useAuth();
  
  const UserRegister = async (url, data) => {
    axios.post(url, data)
      .then((response) => {
        console.log(response);
        navigation.navigate("login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <AuthComponent title={"Inscription"} AuthConfig={UserRegister} root="/inscription" />
  );
};
export default Register;
