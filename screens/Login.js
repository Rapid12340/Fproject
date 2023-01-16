import React, { useState } from 'react';
import { Alert, Button, TextInput, View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



function Login() {
  

    const navigation = useNavigation();

    

    const [pUser, setpUser] = useState('');
    const [pPassword, setpPassword] = useState('');

    const Register = () =>
    {
      auth()
      .createUserWithEmailAndPassword(pUser, pPassword)
      .then(() => {
        console.log('Conta Criada');
        firestore()
        .collection('testeid')
        .doc(pUser)
        .set({
          email: pUser
        })
        .then(() => {
          console.log('Acho q deu');       
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert("Email já existe");
        }
        if (error.code === 'auth/invalid-email') {
          alert("Email Invalido");
        }
      });
    }



    const TLogin = () => {
        auth()
        .signInWithEmailAndPassword(pUser, pPassword)
        .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email, "entrou.");
        if(pUser == "jferreiro@gmail.com") //pw: 111111
        {
          navigation.replace("AMenu"); 
        }
        else
        {
          navigation.replace("Menu", {Item: pUser}); 
        }
        })
    }
    


    return (
        <View style={styles.container}>
            <TextInput  value={pUser} placeholder='Email' style={styles.typer} onChangeText={text => setpUser(text)} ></TextInput>
            <TextInput value={pPassword}  placeholder='Password' style={styles.typer} onChangeText={text => setpPassword(text)}></TextInput>
            <TouchableOpacity style={styles.roundButton} onPress={Register}><Text style={styles.Txt}>Register</Text></TouchableOpacity>
            <TouchableOpacity  style={styles.roundButton} onPress={TLogin}><Text style={styles.Txt}>Login</Text></TouchableOpacity>
        </View>
    )
}  

const styles = StyleSheet.create({
    container:{
        
        padding: 20,
        paddingTop:40,
       
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
        backgroundColor: 'orange',
        margin:5
    },
    Txt: {
        fontSize: 14,
        paddingLeft:140
    }
})


export default Login;