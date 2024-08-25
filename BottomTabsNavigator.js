import React from "react";
import { View, Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomePage from "./Screens/HomePage";
import QuestionPage from "./Components/QuestionPage";

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Portfolio</Text>
    </View>
  );
};
const WalletScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> your wallet</Text>
    </View>
  );
};
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> your Profile</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const MainTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Portfolio") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View
              style={{
                width: 50,
                height: 50,
                borderWidth: 0.5,
                borderRadius: 25,
                borderColor: focused ? "white" : "gray",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: focused ? "gray" : "transparent",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 5,
              }}
            >
              <Ionicons
                name={iconName}
                size={focused ? 28 : 25}
                color="white"
              />
            </View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          height: Platform.OS === "ios" ? "15%" : "10%",
          borderTopWidth: 0.5,
          borderTopColor: "gray",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);
