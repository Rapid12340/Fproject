import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';







const Turn = ({navigation}) => {
    const [selectedShift, setSelectedShift] = useState(null);
  
    const [selectedShift2, setSelectedShift2] = useState(null);
  
    const [selectedUser, setSelectedUser] = useState(null);
  
    const [visible, setVisible] = useState(true);
  
    const [escolhido, setEscolhido] = useState(true);
  
    const handleSelectShift = (shift) => {
      setSelectedShift(shift);
      console.log("Break");
      setVisible(false)
    };
  
    const handleSelectShift2 = (shift) => {
      setSelectedShift2(shift);
      console.log("Topple");
      setEscolhido(false)
    };
  
    const handleSelectUser = (shift) => {
      console.log("Launch");
      setSelectedUser(shift)
    };
  
    const comecar = ['8:00','9:00','10:00','11:00','12:00'];
  
    const acabar = ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
  
    const Enviar = () => {
      firestore()
      .collection('testeid')
      .doc(selectedUser)
      .update({
        horaInicio: selectedShift,
        horaFim: selectedShift2
      })
      .then(() => {
        alert("Turno Criado com sucesso!");
        navigation.replace('AMenu')
      });
    };
  
    const [data] = React.useState([]);
  
    useEffect(() => {
  
      const collectionRef = firestore().collection('testeid');
      collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.id);
      });
      });
    }, []);
  
    if(visible)
    {
      return (
        <View>
          <Text  style={styles.Txt}>Selecione a hora que quer começar:</Text>
          {comecar.map((shift) => (
            <TouchableOpacity
              key={shift}
              onPress={() => handleSelectShift(shift)}
              style={{
                backgroundColor: shift === selectedShift ? 'lightgray' : 'white',
                padding: 8,
                margin: 8,
              }}
            >
              <Text>{shift}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    else
    {
  
      if(escolhido)
      {
        return (
          <View>
            <Text  style={styles.Txt}>Selecione a hora que quer acabar:</Text>
            {acabar.map((shift) => (
              <TouchableOpacity
                key={shift}
                onPress={() => handleSelectShift2(shift)}
                style={{
                  backgroundColor: shift === selectedShift2 ? 'lightgray' : 'white',
                  padding: 8,
                  margin: 8,
                }}
              >
                <Text>{shift}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
      else
      {
        return (
          <View>
            {data.map((shift) => (
              <TouchableOpacity
                key={shift}
                onPress={() => handleSelectUser(shift)}
                style={{
                  backgroundColor: shift === selectedUser ? 'lightgray' : 'white',
                  padding: 8,
                  margin: 8,
                }}
              >
                <Text>{shift}</Text>
              </TouchableOpacity>
            ))}
            <Button
            title='Enviar para o Utilizador'
            onPress={Enviar}
            />
            
          </View>
        );
      }
    }
    
  };

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
        margin:5
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
  
  export default Turn;
  