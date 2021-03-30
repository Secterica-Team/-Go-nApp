import React from 'react'

import {View, Image, StyleSheet, Text} from 'react-native';
import Button from "react-native-button";
import {useNavigation} from "@react-navigation/native";

const imageSrc = require('../photos/location_color_1.jpg');
export default function Page2() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSrc}/>

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
                <Button style={styles.button2} variant="outlined"
                        onPress={() => navigation.navigate("Page3")
                        }>Next {'>'}</Button>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

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


    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    button: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontSize: 18,

    },
    button2: {
        marginRight: 100,
        paddingLeft: 100,
        color: '#555555',
        fontWeight: "bold",
    },
})
