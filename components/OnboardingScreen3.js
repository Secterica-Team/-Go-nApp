import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "react-native-paper";
import { useTheme } from 'react-native-paper';

export default function Page3() {
    const colors = useTheme();
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/onboard_3.jpg')} />

            <View style={styles.container}>
                <Text style={styles.text}> Personal Statistics </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text2}> After training, the monitoring {'\n'}
                    system displays objective data {'\n'}
                    on the results of each player </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={{...styles.button, borderColor: colors.accent}} mode="outlined">
                    Get started</Button>


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

        // color: '#555555',
        // fontSize: 18,
        borderWidth: 2,
        // borderColor: "#",
        borderRadius: 50,

    },


})
