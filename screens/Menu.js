import React,  { useState,  useEffect  }  from 'react'
import { Alert, Button, TextInput, View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




function Menu({navigation, route}) {

    const {Item} = route.params;

    const onPressBLogin = () => {
        navigation.navigate('Login');
    };

   
    const logout = ({navigation}) => {
        auth()
        .signOut()
        .then(onPressBLogin())};
    
        function horaFinal(documentSnapshot){return documentSnapshot.get('horaFim');}
        function horaInicial(documentSnapshot){return documentSnapshot.get('horaInicio');}
      
        const [horaInicio, setHoraInicio] = React.useState([]);
        const [horaFim, setHoraFim] = React.useState([]);
      
        const lerFinal = () => {
          firestore()
          .collection('testeid')
          .doc(Item)
          .get()
          .then(documentSnapshot => horaFinal(documentSnapshot))
          .then(feito => {
            const horinha = []
            console.log(feito);
            horinha.push(feito);
            setHoraFim(horinha);
          })
        };
      
        const lerInicial = () => {
          firestore()
          .collection('testeid')
          .doc(Item)
          .get()
          .then(documentSnapshot => horaInicial(documentSnapshot))
          .then(feito => {
            const horinha = []
            console.log(feito);
            horinha.push(feito);
            setHoraInicio(horinha);
          })
        };
      
        useEffect(() => {
          lerFinal()
          lerInicial()
        }, []);    


    return (
        <View style={styles.container}>
            <Text style={styles.Txt2}>Logged as:</Text>
            <Text style={styles.Txt3}> {Item} (Worker)</Text>
            <Text style={styles.txt4}>Turnos:</Text>
            <Text style={styles.txt4}>Hora do Inicio - {horaInicio}</Text>
            <Text style={styles.txt4}>Hora do Fim do Turno - {horaFim}</Text>
            <TouchableOpacity  style={styles.roundButton} onPress={logout}><Text style={styles.Txt}>Logout</Text></TouchableOpacity>
            
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
        color:'green'
    },
    txt4:{
        fontSize:20,
        margin:5
    }


})

export default Menu;