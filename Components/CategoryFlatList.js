import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { category } from "../Database/JSON_Data";

const CategoryFlatList = () => {
  const categories = category;

  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.btc}>
                  {item.price && <Text style={styles.price}>{item.price}</Text>}
                  {item.change && (
                    <Text style={styles.change}> {item.change}</Text>
                  )}
                  {item.year ? (
                    <Text style={styles.year}>{item.year}</Text>
                  ) : (
                    <Text style={styles.year}>{item.sport}</Text>
                  )}
                </View>
              </View>
            </View>
            <Image source={item?.icon} style={styles.icon} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryFlatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171716",
    height: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    margin: 10,
    justifyContent: "space-between",
    width: 230,
    alignItems: "center",
    borderBottomColor: "white",
    backgroundColor: "#141314",
    borderRadius: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  icon: {
    width: 70,
    height: 60,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 16,
    color: "#555",
  },
  change: {
    fontSize: 14,
    color: "green",
    marginLeft: 10,
  },
  symbol: {
    fontSize: 14,
    color: "#333",
  },
  year: {
    fontSize: 14,
    color: "#888",
  },
  btc: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
