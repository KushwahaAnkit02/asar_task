import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { buyerSellerList } from "../Database/JSON_Data";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const BuyerSellerList = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [butten, setButton] = useState(false);
  const data = buyerSellerList;

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + data.length);
    setButton(true);
  };
  const handleLessMore = () => {
    setVisibleItems(4);
    setButton(false);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.mainView}>
        <View style={styles.textView}>
          <Text style={styles.text}>ACTIVITY</Text>
          <Text style={styles.text}>ORDER BOOK</Text>
        </View>
        {data.slice(0, visibleItems).map((item) => {
          return (
            <View key={item.id}>
              <View style={styles.arrangeItems}>
                <View style={styles.name}>
                  <View style={styles.icon}>
                    <Image style={styles.image} source={item.icon} />
                  </View>
                  <Text style={styles.headText}>{item.buyer}</Text>
                </View>
                <View style={styles.prices}>
                  <View style={styles.offeredText}>
                    <Text style={styles.text}>{item.price_offered}</Text>
                  </View>
                  <View style={styles.bidText}>
                    <Text style={styles.text}>{item.price_bid}</Text>
                  </View>
                </View>
                <View style={styles.name}>
                  <View style={styles.icon}>
                    <Image style={styles.image} source={item.icon} />
                  </View>
                  <Text style={styles.headText}>{item.seller}</Text>
                </View>
              </View>
            </View>
          );
        })}
        {visibleItems < data.length && (
          <TouchableOpacity style={styles.listButton} onPress={handleSeeMore}>
            <Text style={styles.text}>See More...</Text>
          </TouchableOpacity>
        )}
        {butten && (
          <TouchableOpacity style={styles.listButton} onPress={handleLessMore}>
            <Text style={styles.text}>See Less...</Text>
          </TouchableOpacity>
        )}
        <View style={styles.footer}>
          <Text style={styles.heading}>About the event</Text>
          <View style={styles.tradersView}>
            <View style={styles.footerTradersText}>
              <Text style={styles.text}>Traders</Text>
              <Text style={styles.headText}>₹ 47.12K</Text>
            </View>
            <View style={styles.footerTradersText}>
              <Text style={styles.text}>Traders</Text>
              <Text style={styles.headText}>9.9L</Text>
            </View>
          </View>
          <View style={styles.tradersView2}>
            <View style={styles.footerTradersText}>
              <Text style={styles.text}>Started at</Text>
              <Text style={styles.headText}>Jun 19, 2024, 3:40 PM</Text>
            </View>
            <View style={styles.footerTradersText}>
              <Text style={styles.text}>Started at</Text>
              <Text style={styles.headText}>Jun 19, 2024, 3:40 PM</Text>
            </View>
          </View>
          <View style={styles.informationView}>
            <View style={styles.footerInformation}>
              <Text style={styles.headText}>Overview</Text>
              <Text style={styles.text}>Information about event</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.informationView}>
            <View style={styles.footerInformation}>
              <Text style={styles.headText}>Source of truth</Text>
              <Text style={styles.text}>Information about source of truth</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.informationView}>
            <View style={styles.footerInformation}>
              <Text style={styles.headText}>Rules</Text>
              <Text style={styles.text}>Terms and conditions</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "gray",
              width: "50%",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Keep Trading !
          </Text>
          <View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.yesButton}
                onPress={() => console.log("yes")}
              >
                <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.noButton}
                onPress={() => console.log("No")}
              >
                <Text style={styles.buttonText}>No ₹ 4.7</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flexGrow: 1,
    paddingBottom: 20, // Ensures there's space at the bottom of the scroll content
  },
  mainView: {
    flex: 1,
    marginVertical: 20,
  },
  textView: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  offeredText: {
    color: "#FFFFFF",
    backgroundColor: "green",
    justifyContent: "center",
    paddingLeft: 5,
    width: "80%",
    height: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bidText: {
    color: "#FFFFFF",
    backgroundColor: "blue",
    justifyContent: "center",
    width: "20%",
    height: 25,
    paddingLeft: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  prices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    height: 25,
  },
  arrangeItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 40,
    width: 40,
  },
  text: {
    color: "#FFFFFF",
  },
  listButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFFFFF",
    borderWidth: 0.3,
    height: 40,
    borderRadius: 10,
  },
  footer: {
    marginVertical: 20,
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  tradersView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  headText: {
    color: "white",
    fontWeight: "bold",
  },
  footerTradersText: {
    height: 50,
    justifyContent: "space-around",
  },
  tradersView2: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderWidth: 0.3,
    paddingBottom: 10,
  },
  name: {
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerInformation: {
    marginTop: 10,
    height: 40,
    justifyContent: "space-between",
  },
  informationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "white",
    borderWidth: 0.3,
    paddingBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    marginBottom: Platform.OS === "ios" ? "100%" : "80%",
    marginTop: 30,
    justifyContent: "space-between",
  },

  yesButton: {
    backgroundColor: "#0a53c2",
    padding: 10,
    borderRadius: 10,
    width: "80%",
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
    width: "80%",

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

export default BuyerSellerList;
