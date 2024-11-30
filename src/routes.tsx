import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

// Páginas
import Home from "./pages/Home";
import EcoAjuda from "./pages/EcoAjuda";
import Profile from "./pages/Profile";
import Trophies from "./pages/Trophies";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Ícones
import EcoAjudaIconActive from "../assets/EcoAjudaIconActive.svg";
import EcoAjudaIconInactive from "../assets/EcoAjudaIconInactive.svg";
import HomeIconActive from "../assets/HomeIconActive.svg";
import HomeIconInactive from "../assets/HomeIconInactive.svg";
import ProfileIconActive from "../assets/ProfileIconActive.svg";
import ProfileIconInactive from "../assets/ProfileIconInactive.svg";
import TrophiesIconActive from "../assets/TrophiesIconActive.svg";
import TrophiesIconInactive from "../assets/TrophiesIconInactive.svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "#fff",
        },
        tabBarIcon: ({ focused }) => {
          let IconComponent;

          if (route.name === "Home") {
            IconComponent = focused ? (
              <HomeIconActive width={40} height={40} />
            ) : (
              <HomeIconInactive width={40} height={40} />
            );
          } else if (route.name === "EcoAjuda") {
            IconComponent = focused ? (
              <EcoAjudaIconActive width={40} height={40} />
            ) : (
              <EcoAjudaIconInactive width={40} height={40} />
            );
          } else if (route.name === "Trophies") {
            IconComponent = focused ? (
              <TrophiesIconActive width={40} height={40} />
            ) : (
              <TrophiesIconInactive width={40} height={40} />
            );
          } else if (route.name === "Profile") {
            IconComponent = focused ? (
              <ProfileIconActive width={40} height={40} />
            ) : (
              <ProfileIconInactive width={40} height={40} />
            );
          }

          return <View>{IconComponent}</View>;
        },
      })}
    >
      <Tab.Screen
        options={{ tabBarIconStyle: { top: 20 }, headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarIconStyle: { top: 20 }, headerShown: false }}
        name="EcoAjuda"
        component={EcoAjuda}
      />
      <Tab.Screen
        options={{ tabBarIconStyle: { top: 20 }, headerShown: false }}
        name="Trophies"
        component={Trophies}
      />
      <Tab.Screen
        options={{ tabBarIconStyle: { top: 20 }, headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/* Tela de Cadastro */}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/* Tab Navigator com as telas principais */}
        <Stack.Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
