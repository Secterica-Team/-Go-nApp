import React from 'react-native'

import {View, Image, StyleSheet, Text} from 'react-native';
import Button from "react-native-button";

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
export const Page2 = () => {

    return (
        <View style={styles.container}>

            {/*<Image style={styles.image}   source = {require('../GonAppV1/photos/head.png')} />*/}
            <Image style={styles.image2} source={require('../GonAppV1/photos/location color 1.jpg')}/>

            <View style={styles.container}>
                <Text style={styles.text}> Accuracy And Speed </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> Get test results with a mobile {'\n'}
                    app that is consistently {'\n'}
                    up-to-date </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined">Skip </Button>
                <Button style={styles.button2} variant="outlined">Next -></Button>

            </View>
        </View>


    );

}
