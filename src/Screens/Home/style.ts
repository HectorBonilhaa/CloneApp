import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white',

    },

    header: {
        
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 20,
        margin: 10,
        justifyContent: 'center',
        gap: 5,
    },
    logo: {
        width: 50,
        height: 30,
        borderRadius: 50,
        marginLeft: 5,

    },
    logoChat:{
        width: 50,
        height: 50,
        marginLeft: 80,
        color: 'white',
    },
    nomeLogo: {
        color: '#FF004F',
        fontSize: 20,
        paddingLeft: 10,
    },

    card: {
        flex: 0.8,
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 8,
        borderWidth: 0.7,
        borderColor: 'black',
    },

    picture: {
        flex: 1.,
        width: '100%',
        height: '100%',
        borderRadius: 8,

    },

    textName: {
        paddingLeft: 5,
        fontSize: 30,
        fontWeight: 'bold',
    },

    textDescript: {
        paddingLeft: 5,

        fontSize: 20,
        color: 'black',
    },

    iconsContent: {
        marginTop: 15,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    icon: {
        width: 45,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
    }
});