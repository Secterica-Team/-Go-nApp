import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import ListItemGroup from "./ListItemGroup";
import Icon from "react-native-vector-icons/FontAwesome";
import ComponentWithButtonTextAndBackgroundImage from "./ComponentWithButtonTextAndBackgroundImage";
import { useNavigation } from "@react-navigation/core";

const imageWidth = Dimensions.get("window").width * 0.4;
const imageHeight = imageWidth;

const scheludeItemsList = [
  {
    id: 1,
    title: "Група 2012 рік",
    time: "12:30 - 13:45",
  },
  {
    id: 2,
    title: "Група 2010 рік",
    time: "14:15 - 15:30",
  },
  {
    id: 3,
    title: "Група 2008 рік",
    time: "18:00 - 19:45",
  },
];

export default function MainScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => {
    return <ListItemGroup item={item} key={JSON.stringify(item.id)} />;
  };

  return (
    <View style={{ paddingTop: 30, marginHorizontal: 30, height: "100%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "40%" }}>
          <Text style={{ fontSize: 36, fontWeight: "bold", marginTop: 40,  }}>
            Привіт, Олег
          </Text>
          <Text style={{ fontSize: 14, color: "#444", marginTop: 20 }}>
            Сьогодні, 5 травня
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image
            style={{ height: imageWidth, width: imageHeight }}
            source={require("../../photos/main/main_screen_top2.png")}
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 40,
          fontSize: 20,
          fontWeight: "bold",
          color: "#06224A",
          marginBottom: 20,
        }}
      >
        Розклад занять
      </Text>
      <FlatList
        data={scheludeItemsList}
        renderItem={renderItem}
        keyExtractor={(item) => JSON.stringify(item.id)}
        contentContainerStyle={{ flex: 1 }}
      />
      <ComponentWithButtonTextAndBackgroundImage
        text={"Приєднатись до спорядження"}
        onPress={() => {
            navigation.navigate("QrCode")
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
