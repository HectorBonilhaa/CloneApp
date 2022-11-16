import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";


export const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Image
                    style={styles.logo}

                    source={require("../../assets/tinder.png")}
                />
                <Text style={styles.nomeLogo}>Tinder Petrópolis</Text>
                <TouchableOpacity>
                <Image
                style={styles.logoChat}
                source={require('../../assets/chat.png')}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.picture}
                    source={require('../../assets/ju.jpg')}
                />
                <Text style={styles.textName}>Ju, 27</Text>
                <Text style={styles.textDescript}>Cantora</Text>

            </View>
            <View style={styles.iconsContent}>
                <TouchableOpacity>

                    <Image
                        style={styles.icon}
                        source={require('../../assets/voltar.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>

                    <Image
                        style={styles.icon}
                        source={require('../../assets/close.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>

                    <Image
                        style={styles.icon}
                        source={require('../../assets/superLike.png')}
                    />
                </TouchableOpacity>
               
                <TouchableOpacity>

                    <Image
                        style={styles.icon}
                        source={require('../../assets/coracao.png')}
                    />
                </TouchableOpacity>

            </View>


        </View >
    )
}