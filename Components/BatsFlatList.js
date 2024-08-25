import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bats } from "../Database/JSON_Data";
import YesNoPage from "../Screens/YesNoPage";
import { useNavigation } from "@react-navigation/native";

const BatsFlatList = () => {
  const [isModal, setIsModal] = useState(false);
  const [onPressedData, setOnPressedData] = useState();
  const [yesButton, setYesButton] = useState(false);
  const [noButton, setNoButton] = useState(false);
  const navigation = useNavigation();

  const data = bats;

  const handleYesButton = (item) => {
    setOnPressedData(item);
    setIsModal(true);
    setYesButton(true);
    setNoButton(false);
  };
  const handleNoButton = (item) => {
    setOnPressedData(item);
    setIsModal(true);
    setYesButton(false);
    setNoButton(true);
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.container}>
            <View style={styles.itemArrangment}>
              <Pressable
                style={styles.items}
                onPress={() => navigation.navigate("question", {item})}
              >
                <Text style={styles.question}>{item?.Question}</Text>
                <Text style={styles.text}>
                  H2H last 5 T20 : {item?.H2H_last_5_T20}
                </Text>
              </Pressable>
              <Image source={item?.icon} style={styles.icon} />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => handleYesButton(item)}
              >
                <Text style={styles.buttonText}>Yes {item.YesValue}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.noButton}
                onPress={() => handleNoButton(item)}
              >
                <Text style={styles.buttonText}>No {item.NoValue}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {isModal && (
        <YesNoPage
          setIsModal={setIsModal}
          isModal={isModal}
          item={onPressedData}
          yesButton={yesButton}
          noButton={noButton}
        />
      )}
    </View>
  );
};

export default BatsFlatList;
const styles = StyleSheet.create({
  mainView: {
    height: Platform.OS === "ios" ? "70%" : "75%",
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
