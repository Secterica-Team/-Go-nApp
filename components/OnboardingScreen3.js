<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
=======
import { useNavigation } from '@react-navigation/native';
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from "react-native-paper";
import {useTheme} from 'react-native-paper';

export default function Page3() {
    const navigation = useNavigation();

    const colors = useTheme().colors;
<<<<<<< HEAD

=======
    
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/onboard_3.jpg')}/>

            <View style={styles.container}>
                <Text style={styles.title}> Персональна Статистика </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}> Після тренування система моніторингу дозволяє переглянути
                    об'єктивні дані тренувань кожного гравця </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    // style={{ ...styles.button, borderColor: colors.primary }}
<<<<<<< HEAD
                    // theme={{,}}
                    // borderColor = "red"
                    style={styles.button}

                    onPress={() => {
                        navigation.navigate('SignUp')
                    }

                    }
                    mode="outlined"
                >
                    <Text style={{color: "#0245A3", fontSize: 18}}>Розпочати</Text>
=======
                    theme={{roundness: 10,}}
                    onPress={() => {navigation.navigate('SignUp')}}
                    mode="outlined"
                >
                    Get started
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
    },
<<<<<<< HEAD
    title: {
        fontSize: 24,
=======

    text: {
        fontSize: 25,
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
        width: 500,
        textAlign: "center",
        marginVertical: -335,
    },
    text: {
        fontSize: 18,
        width: 400,
        textAlign: "center",
<<<<<<< HEAD
        marginVertical: -200,
    },


=======
        marginVertical: -275,
    },

>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
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
<<<<<<< HEAD

        borderRadius: 100,
        borderColor: "#0245A3",
        borderWidth: 2,
        width: 297,
=======
        borderWidth: 2,
        // borderColor: "#",
        borderRadius: 50,
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    },
})
