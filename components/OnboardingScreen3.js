import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "react-native-paper";
import { useTheme } from 'react-native-paper';

export default function Page3() {
    const navigation = useNavigation();

    const colors = useTheme().colors;
    
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
                <Button
                    // style={{ ...styles.button, borderColor: colors.primary }}
                    theme={{roundness: 10,}}
                    onPress={() => {navigation.navigate('SignUp')}}
                    mode="outlined"
                >
                    Get started
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
    },

    text: {
        fontSize: 25,
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
        borderWidth: 2,
        // borderColor: "#",
        borderRadius: 50,
    },
})
