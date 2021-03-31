import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import OnboardingScreen2 from './components/OnboardingScreen2';
import OnboardingScreen3 from './components/OnboardingScreen3';
import OnboardingScreen1 from './components/OnboardingScreen1';
const Stack = createStackNavigator();


export default function App() {
    const firstTime = true;

    const initialRouteName = firstTime ? "OnboardingScreen1" : "BottomTab"
    return (

        <NavigationContainer>
            <StatusBar style="auto" />
            <View style={styles.topBar} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={initialRouteName}>

                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
                <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
                <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
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
