import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import {
  Button,
  TextInput,
  Checkbox,
  useTheme,
  IconButton,
} from "react-native-paper";
// import { TextInput } from 'react-native'

const imageWidth = Dimensions.get("screen").width;
const imageHeight = imageWidth;
const screenHeight = Dimensions.get("screen").height;

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <View>
      <Image
        style={styles.image}
        source={require("../photos/login_signup/login.jpg")}
      />
      <View style={styles.container}>
        {/* <KeyboardAvoidingView> */}
        <Text style={styles.text_get_started}> Розпочнемо </Text>
        <TextInput
          style={styles.input}
          label="Ім’я"
          mode="outlined"
          error={usernameError}
          value={name}
          onBlur={() => {
            if (!name || !name.trim()) {
              setUsernameError(true);
            } else {
              setUsernameError(false);
            }
          }}
          onChangeText={(name) => setName(name)}
        />
        <Text style={styles.error_text}>
          {usernameError ? "Введіть правильне ім'я" : ""}
        </Text>

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email"
          value={email}
          error={emailError}
          onBlur={() => {
            if (!/^\w+@\w{2,}\.\w{2,5}$/.exec(email)) {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }}
          placeholder="example@example.com"
          onChangeText={(email) => setEmail(email)}
        />
        <Text style={styles.error_text}>
          {emailError ? "Введіть правильну пошту" : ""}
        </Text>

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Пароль"
          error={passwordError}
          value={password}
          onBlur={() => {
            if (
              !(
                password.length > 7 &&
                /.*?[\!\@\#\$\%\^&\*;\:\+=\-_\\\/,\.].*/.exec(password)
              )
            ) {
              setPasswordError(true);
            } else {
              setPasswordError(false);
            }
          }}
          placeholder="мінімум 8 символів"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <Text style={styles.error_text}>
          {passwordError ? "Мінімум 8 символів та один спеціальний символ" : ""}
        </Text>
        {/* </KeyboardAvoidingView> */}
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            color={"#0245A3"}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.text_terms_of_service}>
            Я прочитав і згоден з Умовами Сервісу та нашою Політикою
            Конфіденційності
          </Text>
        </View>
        <View style={styles.middle_wrapper}>
          <Text style={styles.text_sign_up}>Зареєструватися</Text>
          {/* <Button icon={'chevron-right'}/> */}
          {/* <Appbar.Action
                        theme={{ colors: { disabled: colors.primary } }}
                        icon={'chevron-right'}
                        size={50}
                        disabled={!checked}
                    /> */}
          <IconButton
            icon={"chevron-right"}
            size={50}
            color={"#0245A3"}
            disabled={!checked}
            onPress={() => {}}
          />
          {/* <Avatar.Icon icon={'chevron-right'} size={50} /> */}
        </View>
        <View style={styles.bottom_wrapper}>
          <Text style={styles.text_have_account}>Вже маєте аккаунт?</Text>
          <Button
            uppercase={false}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.sign_in}>Увійти</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sign_in: {
    color: "black",
    textDecorationLine: "underline",
  },
  container: {
    marginHorizontal: "10%",
    height: screenHeight - imageHeight,
  },
  image: {
    alignSelf: "center",
    height: imageHeight,
    width: imageWidth,
  },
  text_get_started: {
    marginVertical: 10,
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    // margin: -5,
    // padding: 5,
    marginLeft: 0,
  },
  text_terms_of_service: {
    lineHeight: 21,
    fontSize: 14,
    color: "#0007",
  },
  text_sign_up: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 26,
  },
  middle_wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text_have_account: {
    lineHeight: 21,
    fontSize: 16,
    color: "#0007",
  },
  error_text: {
    color: "#b00",
  },
});
