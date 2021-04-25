import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { Text, TextInput, Button, Checkbox, IconButton, useTheme } from 'react-native-paper'

const imageWidth = Dimensions.get("screen").width * 0.8;
const imageHeight = imageWidth;
const screenHeight = Dimensions.get('screen').height;


export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()
    const colors = useTheme().colors;

    const [rememberChecked, setRememberChecked] = useState(false);

    return (
        <View>
            <Image style={styles.image} source={require("../photos/login.jpg")}/>
            <View style={styles.container}>
                <Text style={styles.text_welcome_back}>Welcome back</Text>

                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />

                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Пароль"
                    value={password}
                    placeholder="8+ Characters, 1 Capital letter"
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <View style={styles.view_after_input}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox
                            status={rememberChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setRememberChecked(!rememberChecked);
                            }}
                        />
<<<<<<< HEAD
                        <Text>Запам'ятати мене</Text>
                        <Button uppercase={false} onPress={() => {
                        }}> <Text style={styles.forgot_password}>Забули пароль?</Text> </Button>
=======
                        <Text>Remember me</Text>
                        <Button>Forgot passsword?</Button>
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
                    </View>
                    <View style={styles.middle_wrapper}>
                        <Text style={styles.text_sign_up}>Sign In</Text>
                        {/* <Button icon={'chevron-right'}/> */}
                        <IconButton
                            icon={'chevron-right'}
                            size={50}
<<<<<<< HEAD
                            color={"#0245A3"}
=======
                            color={colors.primary}
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
                            onPress={() => { navigation.navigate("InfoClubOnboarding") }}
                        />
                    </View>
                </View>
                <View style={styles.bottom_wrapper}>
                    <Text style={styles.text_have_account}>Don’t have an account yet?</Text>
                    <Button
                        uppercase={false}
                        labelStyle={styles.button_sign_up}
                        onPress={() => { navigation.navigate('SignUp') }}
                    >
<<<<<<< HEAD
                        <Text style={styles.sign_up}>Зареєструватися</Text>
=======
                        Sign up
>>>>>>> 2479346ecde8e4d7f75bf96e49f7f6367894595a
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
        marginBottom: 30,
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
    button_sign_up: {
    },
})
