import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const MarketTrendChart = () => {

  const data = {
    labels: ["01:30 AM", "01:30 AM", "01:30 AM", "01:30 AM"],
    datasets: [
      {
        data: [50, 60, 70, 80],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
      },
      {
        data: [40, 30, 20, 10],
        color: (opacity = 1) => `rgba(0, 255, 127, ${opacity})`,
      },
    ],
    legend: ["Yes", "No"],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Market Trend / Chart</Text>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: "#000",
          backgroundGradientTo: "#000",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 16,
  },

});

export default MarketTrendChart;
