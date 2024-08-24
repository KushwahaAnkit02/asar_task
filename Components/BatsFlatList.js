import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bats } from "../Database/JSON_Data";
import { useNavigation } from "@react-navigation/native";
import YesPage from "../Screens/YesPage";
import { heightPercentageToDP } from "react-native-responsive-screen";

const BatsFlatList = () => {
  const [clickedYes, setClickedYes] = useState(false);
  const data = bats;

  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.itemArrangment}>
              <View style={styles.items}>
                <Text style={styles.question}>{item?.Question}</Text>
                <Text style={styles.text}>
                  H2H last 5 T20 : {item?.H2H_last_5_T20}
                </Text>
              </View>
              <Image source={item?.icon} style={styles.icon} />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => setClickedYes(true)}
              >
                <Text style={styles.buttonText}>Yes {item.YesValue}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noButton}>
                <Text style={styles.buttonText}>No {item.NoValue}</Text>
              </TouchableOpacity>
            </View>
            {clickedYes && <YesPage item={item} />}
          </View>
        )}
      />
    </View>
  );
};

export default BatsFlatList;
const styles = StyleSheet.create({
  mainView: {
    height: heightPercentageToDP(75),
  },
  container: {
    height: 250,
    backgroundColor: "#1f2329",
    padding: "8%",
    margin: 10,
    borderRadius: 20,
  },
  items: {
    height: 100,
    justifyContent: "space-around",
  },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "white",
  },
  icon: {
    height: 60,
    width: "20%",
  },
  itemArrangment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-between",
  },
  yesButton: {
    backgroundColor: "#0a53c2",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#033787",
  },
  noButton: {
    backgroundColor: "#08a62a",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "green",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
