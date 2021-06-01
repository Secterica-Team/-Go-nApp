import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Appbar, List } from "react-native-paper";
import ComponentWithButtonTextAndBackgroundImage from "../main-screen/ComponentWithButtonTextAndBackgroundImage";

const traceRoutes = [
  { id: 1, distances: [15 + " м", 30 + " м", 60 + " м", 100 + " м"] },
  { id: 2, distances: [10 + " м", 20 + " м", 30 + " м"] },
  { id: 3, distances: [50 + " м", 100 + " м", 150 + " м"] },
  { id: 4, distances: [10 + " м", 10 + " м", 10 + " м", 20 + " м"] },
  { id: 5, distances: [10 + " м", 10 + " м", 10 + " м", 20 + " м"] },
];

const gateways = [
  { id: 1, distance: 10 },
  { id: 2, distance: 30 },
  { id: 3, distance: 50 },
  { id: 4, distance: 75 },
  { id: 5, distance: 100 },
];

const bg1 = require("../../photos/backgr/bg.png");
const bg2 = require("../../photos/backgr/bg_2.png");

export default function PavingRouteScreen() {
  const navigation = useNavigation();
  const renderRoute = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <ImageBackground
          style={[
            {
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          imageStyle={{
            resizeMode: "contain",
          }}
          source={index % 2 === 0 ? bg1 : bg2}
        >
          <View style={{ padding: 40 }}>
            {item.distances.map((item, index_of_item) => (
              <Text
                style={{ color: index % 2 === 0 ? "#fff" : "#000" }}
                key={JSON.stringify(item.id)}
              >
                {item}
              </Text>
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderGatewayListElement = ({ item, index }) => {
    return (
      <View>
        <List.Item
          left={(props) => (
            <List.Icon
              icon={require("../../photos/backgr/location.png")}
              size={20}
              style={{
                resizeMode: "contain",
              }}
              // color={props.color}
              color={"white"}
            />
          )}
          title={item.distance + " метрів"}
          titleStyle={{
            color: "#fff",
          }}
          right={(props) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <List.Icon
                  icon={require("../../photos/backgr/edit.png")}
                  // color={props.color}
                  color={"white"}
                  style={{
                    paddingHorizontal: 0,
                    marginHorizontal: 0,
                    resizeMode: "contain",
                  }}
                />
                <List.Icon
                  icon={"minus"}
                  // color={props.color}
                  color={"white"}
                  style={{
                    paddingHorizontal: 0,
                    marginHorizontal: 0,
                  }}
                />
              </View>
            );
          }}
          style={{
            backgroundColor: "#85BAF3",
            padding: 0,
            margin: 5,
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <Appbar.Header theme={{ colors: { primary: "white" } }}>
        <Appbar.Action
          onPress={() => {
            navigation.goBack();
          }}
          icon={"chevron-left"}
          size={30}
          color={"#888"}
        />
        <Appbar.Content title="Прокладання траси" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} color={"#888"} />
      </Appbar.Header>
      <View style={{ margin: 10, flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Обрати попередній шаблон
        </Text>
        <FlatList
          horizontal={true}
          data={traceRoutes}
          renderItem={renderRoute}
          keyExtractor={(item, index) => JsSON.stringify(item.id)}
          // contentContainerStyle={{height: }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Створити новий шаблон
        </Text>
        <FlatList
          // contentContainerStyle={{flex: 1}}
          data={gateways}
          renderItem={renderGatewayListElement}
          keyExtractor={(item, index) => JSON.stringify(item.id)}
        />
        <ComponentWithButtonTextAndBackgroundImage
          onPress={() => {}}
          text={"Розпочати тренування"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
