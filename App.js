import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dialogue from "./components/messages/Dialogue";
import Home from "./pages/Home";
import Welcome from "./components/home/Welcome";
import Memories from "./components/Memories/Memories";
import Message from "./components/messages/Message";
import AuthProvider, { useAuth } from "./components/auth/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  // const [user, setUser] = useAuth();
  // useEffect(() => {
  //   (async () => {
  //     const token = await getToken();
  //     console.log('token',token);
  //     if (token) {
  //       setUser([token]);
  //     }
  //   }
  //   )()
  // },)

  const TabBar = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="whitesmoke"
        activeColor="yellow"
        barStyle={{ backgroundColor: "black" }}
        labelStyle={{ fontSize: 12 }}
      >
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="message-reply-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Memories"
          component={Memories}
          options={{
            tabBarLabel: "Memories",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="history" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const Navigator = () => {
    const [user] = useAuth();
    return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ gestureEnabled: true, headerShown: false }}
      >
        {user ? (
          <>
            <Stack.Screen name="Connected" component={TabBar} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
