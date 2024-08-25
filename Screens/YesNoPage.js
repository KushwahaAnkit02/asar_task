import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { RangeSliderButton } from "../Components/RangeSlider";
import SwipeButton from "../Components/SwipeButton";

const YesNoPage = ({ isModal, setIsModal, item, yesButton, noButton }) => {
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const screenHeight = Dimensions.get("window").height;
  const modalHeight = screenHeight / 1.7;

  const openModal = () => {
    setIsModal(true);
    Animated.timing(slideAnim, {
      toValue: screenHeight - modalHeight,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsModal(false));
  };

  useEffect(() => {
    openModal();
  }, [item?.id]);

  return (
    <>
      {isModal && (
        <Modal transparent visible={isModal} animationType="fade">
          <TouchableOpacity
            style={styles.backdrop}
            onPress={closeModal}
            activeOpacity={1}
          >
            <View style={styles.backdrop} />
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <View style={styles.modalView}>
              <View style={styles.items}>
                <Text style={styles.modalText}>{item?.Question}</Text>
                <Image source={item?.icon} style={styles.icon} />
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity
                  style={yesButton ? styles.yesButton : styles.notFocusedButton}
                >
                  <Text style={styles.buttonText}> Yes : {item.YesValue}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={noButton ? styles.noButton : styles?.notFocusedButton}
                >
                  <Text style={styles.buttonText}> No : {item.NoValue}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.box}>
                <View style={styles.boxText}>
                  <Text style={styles.buttonText}>Price</Text>
                  <Text style={styles.buttonText}>
                    {yesButton ? item.YesValue : item.NoValue}
                  </Text>
                </View>
                <Text style={styles.quantity}>132045 qty available</Text>
                <RangeSliderButton item={item} yesButton={yesButton} />
                <View
                  style={{
                    width: "100%",
                    borderBottomWidth: 0.3,
                    borderColor: "white",
                  }}
                ></View>
                <View style={styles.battingText}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.putText}>
                      {yesButton ? item.YesValue : item.NoValue}
                    </Text>
                    <Text style={styles.putText}>You put</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.getText}> ₹ 10</Text>
                    <Text style={styles.getText}>You get </Text>
                  </View>
                </View>
              </View>
              <SwipeButton yesButton={yesButton} />
              <Text style={{ color: "white", textAlign: "center" }}>
                Available Balance : 400.00
              </Text>
            </View>
          </Animated.View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  openButtonText: {
    color: "white",
    fontSize: 18,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(200, 2000, 2000, 0.1)",
  },
  modalContent: {
    position: "absolute",
    left: 0,
    right: 0,
    height: Dimensions.get("window").height / 1.2,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },

  modalView: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 20,
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
    fontSize: 15,
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
    height: 50,
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
    backgroundColor: "#08a62a",
    borderRadius: 25,

    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "green",
  },

  notFocusedButton: {
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
    height: "43%",
    padding: 10,
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
  putText: {
    color: "white",
  },

  getText: {
    color: "green",
  },
  battingText: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default YesNoPage;
