import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseCon';

export default function App() {

  const [nome, setNome] = useState('Carregando nome..');
  const [idade, setIdade] = useState();
 
  useEffect(()=>{
   
    async function dados(){

     /* await firebase.database().ref('Usuario/2').on('value',(snapshot)=>{
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
     }); */

     /*   await firebase.database().ref('nome').set({ 
        nome: 'Diego',
        idade: 35
     }); */

     //await firebase.database().ref('nome').remove();

    /*  await firebase.database().ref('Usuario/4').update({
        nome: 'Brick'
     }); */

    }

    dados();

  },[]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:18}}>Nome: {nome}</Text>
      <Text style={{fontSize:18}}>Idade: {idade}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
