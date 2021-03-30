import React, {useState} from 'react'
import {Pressable, View, Image, StyleSheet, Text} from 'react-native';
import Button from "react-native-button";
import {Page2} from "./Page2";


const styles = StyleSheet.create({


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
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3333',
        paddingBottom: 10

    },
    image2: {

        width: 500,
        marginBottom: 393,

        backgroundColor: '#3333',


    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
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
export const Page1 = ({navigation}) => {
    return (
        <View style={styles.container}>

            {/*<Image style={styles.image}   source = {require('../GonAppV1/photos/head.png')} />*/}
            <Image style={styles.image2} source={require('../GonAppV1/photos/2.jpg')}/>

            <View style={styles.container}>
                <Text style={styles.text}> Automatic Timing System </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> Test sports skills every day with {'\n'}
                    timing gates simply using your {'\n'}
                    smart phone as a controller </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined">Skip </Button>
                <Button
                    style={styles.button2} variant="outlined" title="Page2"
                    onPress={() => navigation.navigate("Page2")
                    }/>

                <Text> Next-></Text>


            </View>

        </View>


    );

}


