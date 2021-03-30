import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import Page2 from './components/Page2';
import Page1 from './components/Page1';

const Stack = createStackNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <StatusBar style="auto" />
            <View style={styles.topBar} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"BottomTab"}>

                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="Page1" component={Page1} />
                <Stack.Screen name="Page2" component={Page2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    topBar: {
        paddingTop: StatusBar.currentHeight,
    }
});
