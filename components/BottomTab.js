import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import OnboardingScreen3 from './OnboardingScreen3';

const Tab = createBottomTabNavigator();

const iconSize = 30;

export default function BottomTab() {
    return (
        <View style={{height:'100%'}}>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        height: 60,
                        backgroundColor: "#000",
                    },
                    activeTintColor: "#fff",
                    tabStyle: {
                        margin: 5,
                        borderRadius: 4,
                    },
                }}
                shifting={true}
                sceneAnimationEnabled={false}
                animationEnabled={"false"}
                initialRouteName="Page1"
                backBehavior="history"
                title={"Title"}
                tabBarBadge={"badge"}
                screenOptions={{
                    title: "title"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={OnboardingScreen1}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color }) => {
                            return <AntDesign name="appstore-o" size={iconSize} color={color} />
                        },
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={OnboardingScreen2}
                    options={{
                        tabBarLabel: "User",
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome5 name="user" size={iconSize} color={color} />
                        },
                    }}
                />
                <Tab.Screen
                    name="My"
                    component={OnboardingScreen3}
                    options={{
                        tabBarLabel: "Kek",
                        tabBarIcon: ({ color }) => {
                            return <FontAwesome5 name="user" size={iconSize} color={color} />
                        },
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({})
