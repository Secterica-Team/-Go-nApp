import {useNavigation} from '@react-navigation/native';
import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from "react-native-paper";
import {useTheme} from 'react-native-paper';

export default function Page3() {
    const navigation = useNavigation();

    const colors = useTheme().colors;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../photos/onboarding/onboard_3.jpg')}/>

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
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        width: 500,
        textAlign: "center",
        marginVertical: -335,
    },
    text: {
        fontSize: 18,
        width: 400,
        textAlign: "center",
        marginVertical: -200,
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

        borderRadius: 100,
        borderColor: "#0245A3",
        borderWidth: 2,
        width: 297,
    },
})
