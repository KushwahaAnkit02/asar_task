import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MarketTrendChart from "./MarketTrendChart";
import BuyerSellerList from "./BuyerSellerList";

const QuestionPage = ({ route }) => {
  const [button1h, setButton1h] = useState(false);
  const [button3h, setButton3h] = useState(false);
  const [button12h, setButton12h] = useState(false);
  const [buttonAllTime, setButtonAllTime] = useState(false);
  const { item } = route.params;

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "black",
        }}
      >
        <View style={styles.container1}>
          <View style={styles.imageView}>
            <Image source={item.icon} style={styles.image} />
          </View>
          <Text style={styles.question}>{item.Question}</Text>
          <Text style={styles.H2H_last_5_T20}>
            H2H last 5 T20 : {item.H2H_last_5_T20}
          </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text1}>THE MARKET PREDICT</Text>
          <View style={styles.predictionContainer}>
            <View style={styles.predictionView}>
              <View style={styles.prediction}></View>
            </View>
            <View style={styles.predictionText}>
              <View style={styles.yesNoContainer}>
                <View style={styles.yesContainer}></View>
                <Text style={styles.text1}>Yes</Text>
                <Text style={styles.text1}>64%</Text>
              </View>
              <View style={styles.yesNoContainer}>
                <View style={styles.noContainer}></View>
                <Text style={styles.text1}>No </Text>
                <Text style={styles.text1}>36%</Text>
              </View>
            </View>
          </View>
          <View>
            <MarketTrendChart />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={button1h ? styles.focusedButton : styles.touchable}
              onPress={() => setButton1h(!button1h)}
            >
              <Text
                style={button1h ? styles.focusedButtonText : styles.buttonText}
              >
                1 h
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={button3h ? styles.focusedButton : styles.touchable}
              onPress={() => setButton3h(!button3h)}
            >
              <Text
                style={button3h ? styles.focusedButtonText : styles.buttonText}
              >
                3 h
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={button12h ? styles.focusedButton : styles.touchable}
              onPress={() => setButton12h(!button12h)}
            >
              <Text
                style={button12h ? styles.focusedButtonText : styles.buttonText}
              >
                12 h
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttonAllTime ? styles.focusedButton : styles.touchable}
              onPress={() => setButtonAllTime(!buttonAllTime)}
            >
              <Text
                style={
                  buttonAllTime ? styles.focusedButtonText : styles.buttonText
                }
              >
                all time
              </Text>
            </TouchableOpacity>
          </View>
          <BuyerSellerList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    borderWidth: 0.3,
    borderBottomColor: "white",
    padding: 10,
  },
  imageView: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  question: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  H2H_last_5_T20: {
    marginTop: 20,
    fontSize: 12,
    color: "#06c26d",
    fontWeight: "bold",
    textAlign: "center",
  },
  container2: {
    padding: 20,
  },
  text1: {
    color: "white",
    fontWeight: "bold",
  },
  predictionView: {
    height: "50%",
    width: "70%",
  },
  prediction: {
    height: "100%",
    width: "70%",
    borderLeftColor: "#5693f5",
    borderWidth: 10,
    borderRadius: 100,
  },
  predictionContainer: {
    flexDirection: "row",
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  predictionText: {
    height: "30%",
    width: "30%",
    justifyContent: "space-around",
  },
  yesContainer: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#0754e3",
  },
  noContainer: {
    height: 20,
    width: 20,
    borderRadius: 5,

    backgroundColor: "#06c26d",
  },
  yesNoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  buttonText: {
    color: "white",
  },
  focusedButtonText: {
    color: "black",
  },
  touchable: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  focusedButton: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
});

export default QuestionPage;
