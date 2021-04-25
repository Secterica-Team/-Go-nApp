import { useNavigation } from '@react-navigation/native';
import React from 'react'
<<<<<<< HEAD
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Button } from "react-native-paper";
import { useTheme } from 'react-native-paper';
const imageWidth = Dimensions.get("screen").width;
const imageHeight = imageWidth;
=======
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "react-native-paper";
import { useTheme } from 'react-native-paper';

>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
export default function InfoClubOnboarding() {
    const navigation = useNavigation();

    const colors = useTheme().colors;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../photos/seo_1.jpg')} />
            <View style={styles.content_wrapper}>

                <Text style={styles.title}> Перш за все, </Text>
                <Text style={styles.text}> Оберіть власний спортивний клуб із переліку, щоб приєднатися  </Text>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('InfoClub')
                    }}
                    mode="outlined"
                >
                    <Text style={{ color: "#0245A3", fontSize: 18 }}>Розпочати</Text>
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // alignItems: "center",
        height: "100%",

    },
    title: {
        fontSize: 24,
        // width: 500,
        textAlign: "center",
        // marginVertical: -335,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: "30%",
    },


    image: {
<<<<<<< HEAD
        height: imageHeight,
        width: imageWidth,
=======
        // width: 500,
        // marginBottom: 393,
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
        backgroundColor: '#3333',
    },
    buttonContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    button: {
        width: '70%',

        borderRadius: 100,
        borderColor: "#0245A3",
        borderWidth: 2,
        // width: 297,
    },
    content_wrapper: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    }
})
