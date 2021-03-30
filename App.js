import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
    );
}

export default function App() {

    return (
        <View style={styles.container}>
            <Page1 />
            <Page2 />
            <StatusBar style="auto"/>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
