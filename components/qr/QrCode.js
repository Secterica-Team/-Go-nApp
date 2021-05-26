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



const gateways = [
    { id: 1, distance: 10 },
    { id: 2, distance: 30 },
    { id: 3, distance: 50 },
    { id: 4, distance: 75 },
    { id: 5, distance: 100 },
];

const bg1 = require("../../photos/backgr/bg.png");
const bg2 = require("../../photos/backgr/bg_2.png");

export default function QrCode() {
    const navigation = useNavigation();

    return (<View>
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
                    <Appbar.Content title="Підключення" />
                    <Appbar.Action icon="dots-vertical" onPress={() => {}} color={"#888"} />
                </Appbar.Header>


            </View>
    </View>



    );
}

const styles = StyleSheet.create({});
