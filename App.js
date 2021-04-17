import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';
import OnboardingScreen2 from './components/OnboardingScreen2';
import OnboardingScreen3 from './components/OnboardingScreen3';
import OnboardingScreen1 from './components/OnboardingScreen1';
import SignUpScreen from './components/SignUpScreen';
import { Provider as PaperProvider } from 'react-native-paper'
import LoginScreen from './components/LoginScreen';
<<<<<<< HEAD
import InfoClub from "./components/InfoClub";
=======
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23

const Stack = createStackNavigator();


export default function App() {
  const firstTime = true;
  const loggedIn = false;

  const initialRouteName = firstTime ? "OnboardingScreen1" : loggedIn ? "BottomTab" : "Login"
  return (
      <PaperProvider>
        <NavigationContainer>
          {/* <StatusBar style="auto" /> */}
          <View style={styles.topBar} />
          <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={initialRouteName}>

<<<<<<< HEAD
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
            <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
            <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="InfoClub" component={InfoClub} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
=======
                    <Stack.Screen name="BottomTab" component={BottomTab} />
                    <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
                    <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
                    <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: StatusBar.currentHeight,
  }
});
