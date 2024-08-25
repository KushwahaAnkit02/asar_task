import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category</Text>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
        <Text style={styles.text}>LIVE</Text>
        <MaterialCommunityIcons
          name="bell-outline"
          size={25}
          color="white"
          style={styles.notificationIcon}
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 10,   
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  switch: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationIcon: {
    padding: 10,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 0.5,
  },
});
