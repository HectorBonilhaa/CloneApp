import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, Keyboard
} from "react-native";
import { styles } from "./style";

import { FontAwesome5, Ionicons } from '@expo/vector-icons';



export const Login = () => {


    const [input, setInput] = useState('');
    const [hidenPass, setHidenPass] = useState(true)


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
                <Image
                    style={styles.logo}

                    source={require("../../assets/tinder.png")}
                />
                <Text style={styles.nomeLogo}>Tinder Petrópolis</Text>

                <TextInput
                    placeholder="Celular, username ou email"
                    style={styles.inputUsername}
                />

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder="Sua senha"
                        style={styles.inputPassword}
                        value={input}
                        onChangeText={(typeText) => setInput(typeText)}
                        secureTextEntry={hidenPass}
                    />
                    <TouchableOpacity style={styles.eyeButton} onPress={() => setHidenPass(!hidenPass)}>

                        {hidenPass ?

                            <Ionicons style={styles.eyes} name="eye" size={27} />
                            :
                            <Ionicons style={styles.eyes} name="eye-off" size={27} />

                        }

                    </TouchableOpacity>

                </View>

                <View style={styles.forgotContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton}>
                    <FontAwesome5
                        name="facebook"
                        size={28}
                        color="#0a42bb" />

                    <Text style={styles.facebookText}>Continue como Hector Oliveira</Text>
                </TouchableOpacity>

                <View style={styles.divisor}>
                    <View style={styles.divisorLine}></View>
                    <Text style={{ marginHorizontal: '3%', color: 'white' }}>OU</Text>
                    <View style={styles.divisorLine}></View>

                </View>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Não possui uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpButton}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableWithoutFeedback>

    );
}