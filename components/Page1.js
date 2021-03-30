import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable, View, Image, StyleSheet, Text } from 'react-native';
import Button from "react-native-button";



export default function Page1() {
    const navigation = useNavigation();

    return (
<<<<<<< HEAD
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/2.jpg')} />
=======
        <View>
            <Image style={styles.image2} source={require('../photos/2.jpg')} />
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4

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

<<<<<<< HEAD
    container:{
    alignItems: "center",
    },
=======
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4

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
<<<<<<< HEAD

    image: {
=======
    image: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3333',
        paddingBottom: 10

    },
    image2: {
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4

        width: 500,
        marginBottom: 393,

        backgroundColor: '#3333',


    },
    buttonContainer: {
        flexDirection: 'row',
<<<<<<< HEAD
        // justifyContent: 'center',
=======
        justifyContent: 'center',
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4
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

