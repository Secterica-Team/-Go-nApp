import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ComponentWithButtonTextAndBackgroundImage(props) {
  const { text, onPress, style, activeOpacity } = props;
  return (
    <ImageBackground
      style={[
        {
          // height: "50%",
          margin: 10,
          marginBottom: 30,
          padding: 30,
          alignItems: "center",
          justifyContent: "space-between",
        },
        style,
      ]}
      imageStyle={{
        resizeMode: "contain",
      }}
      source={require("../../photos/main/background_for_next_button_below.png")}
    >
      <View
        style={{
          // marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            width: "60%",
          }}
        >
          {text}
        </Text>

        <TouchableOpacity
          onPress={onPress}
          activeOpacity={activeOpacity ? activeOpacity : 0.6}
        >
          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name={"chevron-right"}
              size={15}
              color={"#888"}
              style={{
                padding: 0,
                margin: 1,
              }}
            />
            <Icon
              name={"chevron-right"}
              size={18}
              color={"#666"}
              style={{
                padding: 0,
                margin: 1,
              }}
            />
            <Icon
              name={"chevron-right"}
              size={20}
              color={"#444"}
              style={{
                padding: 0,
                margin: 1,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
