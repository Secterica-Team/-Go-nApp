import {useNavigation} from '@react-navigation/native';
import React from 'react'

import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import {Button} from "react-native-paper";

const imageSrc = require('../photos/onboarding/onboard_2.jpg');

const imageWidth = Dimensions.get("screen").width;
const imageHeight = imageWidth;

export default function OnboardingScreen2() {

    const navigation = useNavigation();

    return (
        <View>
            <Image style={styles.image} source={imageSrc}/>

            <View style={styles.container}>
                <Text style={styles.title}> Точність і Швидкість </Text>

                <View style={styles.textWrapper}>
                    <Text style={styles.text}>
                        Отримуйте результати тестування з мобільним додатком для відстежувати прогресу
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        variant="outlined"
                        onPress={() => {
                            navigation.navigate("SignUp")
                        }}
                    >
                        <Text  style={{color: "#555555", fontSize: 18}}> Пропустити </Text>
                    </Button>
                    <Button

                        style={styles.button}
                        variant="outlined"
                        onPress={() => {
                            navigation.navigate("OnboardingScreen3")
                        }}
                    >
                        <Text  style={{color: "#555555", fontSize: 18}} > Далі {'→'} </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: Dimensions.get('screen').height - imageHeight,
    },
    title: {
        marginTop: '10%',
        flex: 1,
        fontSize: 25,
        width: "100%",
        justifyContent: 'center',
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        width: "70%",
    },
    textWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: imageHeight,
        width: imageWidth,
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        color: '#555555',
        fontSize: 18,
    },
})
