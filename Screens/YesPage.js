import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const YesPage = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.items}>
            <Text style={styles.modalText}>{item?.Question}</Text>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.buttonText}> Yes : {item.YesValue}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noButton}>
              <Text style={styles.buttonText}> No : {item.NoValue}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <View style={styles.boxText}>
              <Text style={styles.buttonText}>Price</Text>
              <Text style={styles.buttonText}>{item.YesValue}</Text>
            </View>
            <Text style={styles.quantity}>132045 qty available</Text>
            <View>
              <TouchableOpacity>
                <FontAwesome name="minus" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="plus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: "100%",
    height: "70%",
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    color: "white",
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 50,
    height: 60,
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: "#1f2329",
    borderRadius: 25,
    marginVertical: 20,
    height: 60,
    width: "100%",
    justifyContent: "space-between",
  },
  yesButton: {
    backgroundColor: "#0a53c2",
    borderRadius: 25,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#033787",
  },
  noButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  box: {
    height: "35%",
    padding: 20,
    borderColor: "white",
    borderWidth: 0.2,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  boxText: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  quantity: {
    color: "gray",
    textAlign: "right",
  },
});

export default YesPage;
