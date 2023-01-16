import React,  { useState,  useEffect  }  from 'react'
import { Alert, Button, TextInput, View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




function AMenu() {

    const navigation = useNavigation();

    const onPressBLogin = () => {
        navigation.navigate('Login');
    };

    const onPressTurn = () => {
        navigation.navigate('Turn');
    };

    const onPressStats = () => {
        navigation.navigate('Stats');
    };

    const onPressAproval = () => {
        navigation.navigate('Aproval');
    };

    const logout = ({navigation}) => {
        auth()
        .signOut()
        .then(onPressBLogin())};



    return (
        <View style={styles.container}>
            <Text style={styles.Txt2}>Logged as:</Text>
            <Text style={styles.Txt3}>jferreiro@gmail.com (Admin)</Text>
            <TouchableOpacity  style={styles.roundButton} onPress={logout}><Text style={styles.Txt}>Logout</Text></TouchableOpacity>
            <TouchableOpacity style={styles.roundedButton} onPress={onPressTurn}><Text style={styles.Txt}>Criador Turnos</Text></TouchableOpacity>
            
            
        </View>
    )
}  

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        paddingTop:20,
        alignItems:'center'
    },
    typer:{
        borderWidth:1,
        borderRadius: 20,
        borderColor: 'orange',
        margin:5
    },
    roundButton: {
        padding: 10,
        borderRadius: 100,
        width:140,
        backgroundColor: 'red',
        margin:5,
        alignItems: 'center',
        justifyContent:'center'
    },
    roundedButton: {
        height:150,
        width:150,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'orange',
        margin: 5,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    Txt: {
        fontSize: 20,
        paddingLeft:10
    },
    Txt2:{
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20
    },
    Txt3:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
    }

})

export default AMenu;