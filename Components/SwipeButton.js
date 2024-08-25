import React from "react";
import { View } from "react-native";
import SwipeButton from "rn-swipe-button";

const SwiperButton = ({ yesButton }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <SwipeButton
        containerStyles={{ borderRadius: 50 }}
        height={50}
        onSwipeFail={() => console.log("Incomplete swipe!")}
        onSwipeStart={() => console.log("Swipe started!")}
        onSwipeSuccess={() => console.log("Submitted successfully!")}
        railBackgroundColor={yesButton ? "#259cf7" : "#05b063"}
        railStyles={{ borderRadius: 50 }}
        thumbIconStyles={{ borderRadius: 50 }}
        thumbIconWidth={100}
        title={yesButton ? "swipe for Yes" : "swipe for No"}
      />
    </View>
  );
};

export default SwiperButton;
