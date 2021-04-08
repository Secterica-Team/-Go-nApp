import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Button from "react-native-button";

const imageWidth = Dimensions.get("screen").width;
const imageHeight = imageWidth;

export default function OnboardingScreen1() {
    const navigation = useNavigation();



    return (
        <View>
            <Image style={styles.image} source={require('../photos/onboard_1.jpg')} />

            <View style={styles.container}>
                <Text style={styles.title}> Automatic Timing System </Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}> Test sports skills every day with timing gates
                    simply using your smart phone
                as a controller </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                        style={styles.button} 
                        variant="outlined"
                        onPress={() => {navigation.navigate("SignUp")}}
                    >
                        Skip
                    </Button>
                    <Button
                        style={styles.button} 
                        variant="outlined"
                        onPress={
                            () => navigation.navigate("OnboardingScreen2")
                        }>
                        Next {'>'}
                    </Button>



                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        height: Dimensions.get('screen').height-imageHeight,
    },
    title: {
        marginTop: '10%',
        fontSize: 25,
        textAlign: "center",
        flex: 1,
    },
    text: {
        marginTop: '5%',
        fontSize: 20,
        width: '70%',
        textAlign: "center",
    },
    textWrapper: {
        flex: 3,
        // marginBottom: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: imageHeight,
        width: imageWidth,
    },
    buttonContainer: {
        flex: 3,
        // marginBottom: "15%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        color: '#555555',
        fontSize: 18,
    },
})

