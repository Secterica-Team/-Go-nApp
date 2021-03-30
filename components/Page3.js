import React from 'react'
<<<<<<< HEAD
import {StyleSheet, Text, View, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import Button from "react-native-button";
export default function Page3() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/analyse 1.jpg')}/>

            <View style={styles.container}>
                <Text style={styles.text}> Personal Statistics </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> After training, the monitoring {'\n'}
                    system displays objective data {'\n'}
                    on the results of each player </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined">
                    Get started</Button>


            </View>
=======
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default function Page3() {
    return (
        <View>
            {/* <Image style={styles.image2} source={require('../photos/location color 1.jpg')} />

            <View style={styles.container}>
                <Text style={styles.text}> Accuracy And Speed </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> Get test results with a mobile {'\n'}
        app that is consistently {'\n'}
        up-to-date </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.button} variant="outlined" title={'Skip'}/>
                <Button style={styles.button2} variant="outlined" title={"Next >"}/>

            </View> */}
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4
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


    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    button: {

        color: '#555555',
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#0245A3",
        borderRadius: 50,

    },


=======
    image2: {
        width: 400,
        height: 400,
    }
>>>>>>> 09290b668edd3be2492e5ea10b16798c6e9f7fd4
})
