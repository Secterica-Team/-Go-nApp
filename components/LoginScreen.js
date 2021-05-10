import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Image, Alert } from 'react-native'
import { Text, TextInput, Button, Checkbox, IconButton, useTheme } from 'react-native-paper'


const imageWidth = Dimensions.get("screen").width * 0.8;
const imageHeight = imageWidth;
const screenHeight = Dimensions.get('screen').height;


export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState(false)
    // const [password, setEmailError] = useState(false)

    const navigation = useNavigation()
    const colors = useTheme().colors;
    const [rememberChecked, setRememberChecked] = useState(false);

    return (
        <View>
            <Image style={styles.image} source={require("../photos/login_signup/login.jpg")} />
            <View style={styles.container}>
                <Text style={styles.text_welcome_back}>З поверненням !</Text>

                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Email"
                    value={email}
                    error={emailError}
                    onChangeText={email => setEmail(email)}
                    onBlur={() => {
                        if (!(/^\w+@\w{2,}\.\w{2,5}$/.exec(email))) {
                            setEmailError(true);
                        } else {
                            setEmailError(false)
                        }
                    }}
                />
                <Text style={styles.error}>{emailError ? "Введіть правильну пошту" : ""}</Text>

                <TextInput

                    style={styles.input}
                    mode='outlined'
                    label="Пароль"
                    value={password}
                    // placeholder="8+ Characters, 1 Capital letter"
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <View style={styles.view_after_input}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox
                            color={"#0245A3"}
                            status={rememberChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setRememberChecked(!rememberChecked);
                            }}
                        />
                        <Text>Запам'ятати мене</Text>
                        <Button uppercase={false} onPress={() => {
                        }}> <Text style={styles.forgot_password}>Забули пароль?</Text> </Button>
                    </View>
                    <View style={styles.middle_wrapper}>
                        <Text style={styles.text_sign_up}>Увійти</Text>
                        {/* <Button icon={'chevron-right'}/> */}
                        <IconButton
                            icon={'chevron-right'}
                            size={50}
                            color={"#0245A3"}
                            onPress={() => {
                                navigation.navigate("InfoClubOnboarding")
                            }}
                        />
                    </View>
                </View>
                <View style={styles.bottom_wrapper}>
                    <Text style={styles.text_have_account}>Ще не маєте аккаунт?</Text>
                    <Button
                        uppercase={false}
                        labelStyle={styles.button_sign_up}
                        onPress={() => {
                            navigation.navigate('SignUp')
                        }}
                    >
                        <Text style={styles.sign_up}>Зареєструватися</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sign_up: {
        color: "black",
        textDecorationLine: 'underline',
    },
    forgot_password: {
        color: "black",
        textDecorationLine: 'underline',
    },
    container: {
        marginHorizontal: '10%',
        height: screenHeight - imageHeight,
    },
    image: {
        alignSelf: 'center',
        height: imageHeight,
        width: imageWidth,
    },
    text_welcome_back: {
        marginTop: 30,
        fontSize: 28,
        fontWeight: 'bold',
    },
    input: {
        margin: 5,
        marginLeft: 0,
    },
    text_terms_of_service: {
        marginTop: 20,
        lineHeight: 21,
        fontSize: 14,
        color: '#0007'
    },
    text_sign_up: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 26,
    },
    middle_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottom_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    text_have_account: {
        lineHeight: 21,
        fontSize: 16,
        color: '#0007',
    },
    view_after_input: {
        justifyContent: 'space-between',
        flex: 1,
    },
    error: {
        color: '#b00',
    },
})
