import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar, Title, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import ComponentWithButtonTextAndBackgroundImage from "../main-screen/ComponentWithButtonTextAndBackgroundImage";
import Gate from "./Gate";
export default function BeforeRun() {
  const navigation = useNavigation();
  const current_gates = useSelector((state) => state.gates);
  const renderItem = ({ item }) => {
    return <Gate item={item} />;
  };
  return (
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
          title={<Title style={{ fontSize: 22 }}>Прокладання траси</Title>}
        />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} color={"#888"} />
      </Appbar.Header>
      <View style={styles.devicesContainer}>
        <Title style={styles.inputTitle}>Ви впевнені?</Title>
        <Paragraph
          style={{
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.54)",
            marginBottom: 14,
          }}
        >
          Перевірте, чи Ви правильно вказали відстані та задайте точну
          послідовність для прокладання траси
        </Paragraph>
        <FlatList
          data={Array.from(current_gates.gates)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ height: 175 }}
        />
        <TouchableOpacity style={styles.saveTemplateButton} onPress={() => {}}>
          <Text style={styles.saveTemplateButtonText}>Зберегти як шаблон</Text>
        </TouchableOpacity>
        <ComponentWithButtonTextAndBackgroundImage
          text={"Розпочати тренування"}
          style={{ marginTop: "12%" }}
          onPress={() => {
            navigation.navigate("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deviceListTitle: {
    fontSize: 16,
  },
  deviceListTitle: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.54)",
  },
  devicesContainer: { marginTop: "12%", width: "90%", alignSelf: "center" },
  saveTemplateButton: {
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "rgba(232, 232, 232, 0.35)",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  saveTemplateButtonText: { fontSize: 15, color: "#949494" },
});
