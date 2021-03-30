import React from 'react'

<<<<<<< HEAD
import {View, Image, StyleSheet, Text} from 'react-native';
import Button from "react-native-button";
import {useNavigation} from "@react-navigation/native";

const imageSrc = require('../photos/location_color_1.jpg');
export default function Page2() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSrc}/>
=======
import { View, Image, StyleSheet, Text } from 'react-native';
import Button from "react-native-button";
const imageSrc = require('../photos/location_color_1.jpg');
export default function Page2() {
    
    return (
        <View>
            <Image style={styles.image2} source={imageSrc} />
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4

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
<<<<<<< HEAD
                <Button style={styles.button2} variant="outlined"
                        onPress={() => navigation.navigate("Page3")
                        }>Next {'>'}</Button>
=======
                <Button style={styles.button2} variant="outlined">Next -{'>'}</Button>
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

<<<<<<< HEAD
    container: {
        alignItems: "center",
    },

    text: {
        fontSize: 20,
        width: 500,
        textAlign: "center",
        marginVertical: -335,


    },
    text2: {
        fontSize: 20,
        width: 500,
        textAlign: "center",
        marginVertical: -275,


    },

    image: {

        width: 500,
        marginBottom: 393,

        backgroundColor: '#3333',
=======

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
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4


    },
    buttonContainer: {
        flexDirection: 'row',
<<<<<<< HEAD
        alignItems: 'center',

=======
        justifyContent: 'center',
        alignItems: 'center',
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4
    },
    button: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontSize: 18,

<<<<<<< HEAD
=======
        // backgroundColor: 'steelblue'
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4
    },
    button2: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontWeight: "bold",
    },
})
