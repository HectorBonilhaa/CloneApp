import { StyleSheet, Platform } from "react-native";

export const styles= StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#DC143C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: '30%',
        height: 80,
        marginTop: Platform.OS === 'android' ? '5%' : '15%',
        borderRadius: 50,
    },
    nomeLogo:{
        color: '#F4f3f3',
        fontSize: 30,
        marginBottom: Platform.OS === 'android' ? '20%' : '28%',
    },

    inputUsername: {
        width: '90%',
        height: 42,
        backgroundColor: '#F4f3f3',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        
    },
    inputArea:{
        width: '90%',
       backgroundColor: '#F4f3f3',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row',
       borderRadius: 5,

    },
    inputPassword: {
        width: '90%',
        height: 42,
        backgroundColor: '#F4f3f3',
        padding: 8,
        borderRadius: 8,
      

    },
        
    eyeButton: {
        // position:'relative',
        // bottom: 35,
        // left: 160,
    },
        eyes:{
        color: 'black',
            paddingRight: 3,
        }  ,  
    forgotContainer: {
        width: '90%',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    forgotText: {
        color: 'white',
        fontWeight: '700',
    },
    loginButton:{
        marginTop: '5%',
        backgroundColor: '#B22222',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginText: {
        color: '#fff',    
        fontSize: 17,
        fontWeight: 'bold',
        

    },
    facebookButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%',
        fontWeight: 'bold'
    },
    facebookText: {
        color: 'white',
        paddingLeft: 8,
        fontSize: 15,
    },
    divisor: {
        marginTop: '18%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisorLine: {
        width: '45%',
        height: 1,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    signUpText:{
        color: 'white',
        paddingRight: 10,
    },
    signUpButton:{
        color: '#399fff',
        fontSize: 15,
        fontWeight: 'bold',
        
    }
});