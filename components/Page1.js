import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable, View, Image, StyleSheet, Text } from 'react-native';
import Button from "react-native-button";



export default function Page1() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/2.jpg')} />

            <View style={styles.container}>
                <Text style={styles.text}> Automatic Timing System </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> Test sports skills every day with {'\n'}
        timing gates simply using your {'\n'}
        smart phone as a controller </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined">Skip</Button>
                <Button
                    style={styles.button} variant="outlined"
                    onPress={() => navigation.navigate("Page2")
                    } >Next {'>'}</Button>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
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
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
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

