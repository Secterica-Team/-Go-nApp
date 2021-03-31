import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { View, Image, StyleSheet, Text } from 'react-native';
import Button from "react-native-button";
const imageSrc = require('../photos/location_color_1.jpg');

export default function OnboardingScreen2() {

    const navigation = useNavigation();

    return (
        <View>
            <Image style={styles.image2} source={imageSrc} />

            <View>
                <Text style={styles.text}> Accuracy And Speed </Text>
            </View>
            <View>
                <Text style={styles.text2}> Get test results with a mobile {'\n'}
                    app that is consistently {'\n'}
                    up-to-date </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined">Skip </Button>
                <Button style={styles.button2} variant="outlined" onPress={() => {navigation.navigate("OnboardingScreen3")}}>Next -{'>'}</Button>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({


    text: {
        fontSize: 20,
        width: "100%",
        textAlign: "center",
    },
    text2: {
        fontSize: 20,
        textAlign: "center",
    },
    image: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3333',
        paddingBottom: 10

    },
    image2: {

        width: 300,
        height: 400,

        // backgroundColor: '#3333',


    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontSize: 18,

        // backgroundColor: 'steelblue'
    },
    button2: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontWeight: "bold",
    },
})
