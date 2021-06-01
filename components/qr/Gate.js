import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Gate = ({ item }) => (
  <View style={styles.gateContainer}>
    <View style={styles.meters}>
      <Image
        style={{ width: 23, height: 23 }}
        source={require("../../photos/location.png")}
      />
      <Text style={styles.metersText}>{item.distance} метрів</Text>
    </View>
    <View style={styles.controlButtons}>
      <TouchableOpacity>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../../photos/edit_gate.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ height: "100%" }}>
        <Image
          style={{ width: 23, height: 4, marginLeft: 18 }}
          source={require("../../photos/remove_gate.png")}
        />
      </TouchableOpacity>
    </View>
  </View>
);
export default Gate;
const styles = StyleSheet.create({
  gateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#85BAF3",
    height: 40,
    marginBottom: 15,
    borderRadius: 10,
  },
  meters: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  metersText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#E8E8E8",
    marginLeft: 10,
  },
  controlButtons: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
