import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./components/BottomTab";
import OnboardingScreen2 from "./components/OnboardingScreen2";
import OnboardingScreen3 from "./components/OnboardingScreen3";
import OnboardingScreen1 from "./components/OnboardingScreen1";
import SignUpScreen from "./components/SignUpScreen";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./components/LoginScreen";
import InfoClubOnboarding from "./components/info-club/InfoClubOnboarding";
import InfoClub from "./components/info-club/InfoClub";
import MainScreen from "./components/main-screen/MainScreen";
import PavingRouteScreen from "./components/paving-route-screen/PavingRouteScreen";
import QrCode from "./components/qr/QrCode";
import DeviceQrScanner from "./components/qr/DeviceQrScanner";
import { Provider } from "react-redux";
import store from "./redux/store";
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: "#06224A" },
};

export default function App() {
  const firstTime = true;
  const loggedIn = false;

  const initialRouteName = firstTime
    ? "OnboardingScreen1"
    : loggedIn
    ? "BottomTab"
    : "Login";
  //const initialRouteName = "InfoClub"
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {/* <StatusBar style="auto" /> */}
          <View style={styles.topBar} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            // initialRouteName={initialRouteName}>
            initialRouteName={"MainScreen"}
          >
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen
              name="OnboardingScreen1"
              component={OnboardingScreen1}
            />
            <Stack.Screen
              name="OnboardingScreen2"
              component={OnboardingScreen2}
            />
            <Stack.Screen
              name="OnboardingScreen3"
              component={OnboardingScreen3}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="InfoClubOnboarding"
              component={InfoClubOnboarding}
            />
            <Stack.Screen name="InfoClub" component={InfoClub} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="PavingRoute" component={PavingRouteScreen} />
            <Stack.Screen name="QrCode" component={QrCode} />
            <Stack.Screen name="DeviceQrScanner" component={DeviceQrScanner} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: StatusBar.currentHeight,
  },
});
