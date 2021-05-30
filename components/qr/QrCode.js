import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Appbar,
  List,
  Card,
  Title,
  Paragraph,
  Button,
  TextInput,
} from "react-native-paper";
import ComponentWithButtonTextAndBackgroundImage from "../main-screen/ComponentWithButtonTextAndBackgroundImage";

const Gate = ({ item }) => (
  <View
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#85BAF3",
      height: 40,
      marginBottom: 15,
      borderRadius: 10,
    }}
  >
    <Text style={{ fontSize: 14, fontWeight: "500", color: "#FFFF" }}>
      {item.distance} метрів
    </Text>
  </View>
);

export default function QrCode() {
  const navigation = useNavigation();
  const [distance, setDistance] = useState();
  const [gates, setGates] = useState();
  const current_gates = useSelector((state) => state.gates);
  const renderItem = ({ item }) => {
    return <Gate item={item} />;
  };
  return (
    <View>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <Appbar.Header theme={{ colors: { primary: "white" } }}>
          <Appbar.Action
            onPress={() => {
              navigation.goBack();
            }}
            icon={"chevron-left"}
            size={30}
            color={"#888"}
          />
          <Appbar.Content
            title={<Title style={{ fontSize: 22 }}>Підключення</Title>}
          />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => {}}
            color={"#888"}
          />
        </Appbar.Header>
        <Card style={styles.distanceContainer}>
          <Card.Content>
            <Title style={styles.inputTitle}>Введіть відстань</Title>
            <Paragraph style={styles.inputSubtitle}>
              Задайте параметри, щоб встановити розподіл шляху, після цього
              відскануйте QR код пристрою
            </Paragraph>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Наприклад, 0"
                mode="outlined"
                value={distance}
                onChangeText={(distance) => setDistance(distance)}
                outlineColor="#85BAF3"
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DeviceQrScanner", {
                    entered_distance: distance,
                  });
                }}
              >
                <Image
                  style={styles.addDistanceImg}
                  source={require("../../photos/add_distance.png")}
                />
              </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
        <View style={styles.devicesContainer}>
          <Title style={styles.inputTitle}>Ви вже додали...</Title>
          <Paragraph
            style={{
              fontSize: 12,
              color: "rgba(0, 0, 0, 0.54)",
              marginBottom: 14,
            }}
          >
            Ви можете переглядати та змінювати ваші девайси перед завершенням
            додавання
          </Paragraph>
          <FlatList
            data={Array.from(current_gates.gates)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ maxHeight: 175 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  distanceContainer: {
    marginTop: "10%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,

    elevation: 7,
  },
  devicesContainer: {
    marginTop: "8%",
    width: "90%",
    alignSelf: "center",
  },
  input: {
    marginTop: "10%",
    marginBottom: "5%",
    width: "75%",
    borderColor: "#85BAF3",
  },
  inputTitle: {
    fontSize: 16,
  },
  inputSubtitle: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.54)",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addDistanceImg: { width: 50, height: 50, marginTop: 15, marginRight: 5 },
});
