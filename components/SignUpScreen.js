<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react'
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import {Button, TextInput, Checkbox, useTheme, IconButton} from 'react-native-paper'
=======
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { Button, TextInput, Checkbox, useTheme, IconButton } from 'react-native-paper'
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
// import { TextInput } from 'react-native'

const imageWidth = Dimensions.get("screen").width * 0.8;
const imageHeight = imageWidth;
const screenHeight = Dimensions.get('screen').height;

export default function SignUpScreen() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)

    const navigation = useNavigation()

    const colors = useTheme().colors;

    return (
        <View>
<<<<<<< HEAD

            <Image style={styles.image} source={require("../photos/login.jpg")}/>
            <View style={styles.container}>
                <Text style={styles.text_get_started}> Розпочнемо </Text>
                {/* <Text>Name</Text> */}
                <TextInput
                    style={styles.input}
                    label="Ім’я"
=======
            <Image style={styles.image} source={require("../photos/login.jpg")} />
            <View style={styles.container}>
                <Text style={styles.text_get_started}>Get started</Text>
                {/* <Text>Name</Text> */}
                <TextInput
                    style={styles.input}
                    label="Name"
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                    mode='outlined'
                    value={name}
                    onChangeText={name => setName(name)}
                />
                {/* <Text>Email</Text> */}
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    label="Email"
                    value={email}
<<<<<<< HEAD

                    placeholder="example@example.com"
                    onChangeText={email => setEmail(email)}

=======
                    placeholder="example@example.com"
                    onChangeText={email => setEmail(email)}
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                />
                {/* <Text>Password</Text> */}
                <TextInput
                    style={styles.input}
                    mode='outlined'
<<<<<<< HEAD
                    label="Пароль"
                    value={password}
                    placeholder="мінімум 8 символів"
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                />
                <View style={{flexDirection: 'row'}}>

                    <Checkbox color={"#0245A3"}
                              status={checked ? 'checked' : 'unchecked'}
                              onPress={() => {
                                  setChecked(!checked);
                              }}
                    />
                    <Text style={styles.text_terms_of_service}>Я прочитав і згоден з Умовами Сервісу
                        та нашою Політикою Конфіденційності</Text>
                </View>
                <View style={styles.middle_wrapper}>
                    <Text style={styles.text_sign_up}>Зареєструватися</Text>
=======
                    label="Password"
                    value={password}
                    placeholder="8+ Characters, 1 Capital letter"
                    onChangeText={password => setPassword(password)}
                />
                <View style={{ flexDirection: 'row' }}>

                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.text_terms_of_service}>I’ve read and agree with Terms of Service and our Privacy Policy</Text>
                </View>
                <View style={styles.middle_wrapper}>
                    <Text style={styles.text_sign_up}>Sign Up</Text>
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                    {/* <Button icon={'chevron-right'}/> */}
                    {/* <Appbar.Action
                        theme={{ colors: { disabled: colors.primary } }}
                        icon={'chevron-right'}
                        size={50}
                        disabled={!checked}
                    /> */}
                    <IconButton
                        icon={'chevron-right'}
                        size={50}
<<<<<<< HEAD
                        color={"#0245A3"}
                        disabled={!checked}
                        onPress={() => {
                        }}

=======
                        color={colors.primary}
                        onPress={() => { }}
                        disabled={!checked}
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                    />
                    {/* <Avatar.Icon icon={'chevron-right'} size={50} /> */}
                </View>
                <View style={styles.bottom_wrapper}>
<<<<<<< HEAD
                    <Text style={styles.text_have_account}>Вже маєте аккаунт?</Text>
                    <Button uppercase={false} onPress={() => {
                        navigation.navigate('Login')
                    }}><Text style={styles.sign_in}>Увійти</Text></Button>
=======
                    <Text style={styles.text_have_account}>Already have an account?</Text>
                    <Button uppercase={false} onPress={() => { navigation.navigate('Login') }}>Sign in</Button>
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    sign_in:{
        color: "black",
        textDecorationLine: 'underline',
    },
=======
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    container: {
        marginHorizontal: '10%',
        height: screenHeight - imageHeight,
    },
    image: {
        alignSelf: 'center',
        height: imageHeight,
        width: imageWidth,
    },
    text_get_started: {
        marginTop: 30,
        fontSize: 28,
        fontWeight: 'bold',
    },
    input: {
        margin: 5,
        marginLeft: 0,
<<<<<<< HEAD

=======
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    },
    text_terms_of_service: {
        lineHeight: 21,
        fontSize: 14,
        color: '#0007'
    },
    text_sign_up: {
        fontSize: 30,
        fontWeight: 'bold',
<<<<<<< HEAD
        marginVertical: 26,
=======
        marginVertical: 20,
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    },
    middle_wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    bottom_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
<<<<<<< HEAD
        marginBottom: 50,
=======
        marginBottom: 30,
>>>>>>> 71cc267b4ae2696aaa441a49b79f0b503fb16f23
    },
    text_have_account: {
        lineHeight: 21,
        fontSize: 16,
        color: '#0007',
    }
})
