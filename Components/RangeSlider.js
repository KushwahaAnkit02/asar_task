import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Slider } from "react-native-range-slider-expo";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const RangeSliderButton = ({ item, yesButton }) => {
  const [value, setValue] = useState(Number(item.YesValue.slice(2)));

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(value - 1)}
      >
        <FontAwesome name="minus" size={24} color="black" />
      </TouchableOpacity>

      <View
        style={{
          width: widthPercentageToDP(60),
          marginBottom: Platform.OS === "ios" ? "35%" : "28%",
        }}
      >
        <Slider
          min={0}
          max={30}
          valueOnChange={(value) => setValue(value)}
          initialValue={value}
          knobColor={yesButton ? "#309df0" : "#05b063"}
          valueLabelsBackgroundColor="gray"
          inRangeBarColor="white"
          outOfRangeBarColor={yesButton ? "#309df0" : "#05b063"}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(value + 1)}
      >
        <FontAwesome name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  buttonIcon: {},
});
