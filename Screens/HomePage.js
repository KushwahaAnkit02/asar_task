import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import { category } from "../Database/JSON_Data";
import CategoryFlatList from "../Components/CategoryFlatList";
import BatsFlatList from "../Components/BatsFlatList";

const HomePage = () => {
  const categories = category;
  console.log(categories);

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <CategoryFlatList />
        <BatsFlatList />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d0d0c",
    height: "100%",
  },
});
