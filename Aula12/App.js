import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){

  const [nome, setNome] = useState();
  const [input, setInput] = useState();
  
  
  useEffect(()=>{
    
    async function buscarNome(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
    
      if(nomeStorage != null){
        setNome(nomeStorage);
      }

    }    
   buscarNome();

  },[]);
 
  useEffect(()=>{
    
    async function salvarStorage(){
      
      await AsyncStorage.setItem('nomes',nome);
      
    }

    salvarStorage();  

  },[nome]);

  function mostrarNome(){
    setNome(input);
  }

  return(

   <View style={styles.container}>

     <Text style={styles.texto}>{nome}</Text>

     <TextInput
       style={styles.input}
       placeholder='Digite um nome'
       onChangeText={(texto)=>{setInput(texto)}}
     />

     <TouchableOpacity style={styles.botao} onPress={mostrarNome}>
       <Text style={styles.textobotao}>Cadastrar</Text>
     </TouchableOpacity>

   </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#3BA0DE'
  },
  
  texto: {
    fontSize: 30,
    textAlign:'center',
    marginBottom: 30
  },

  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 20,
    paddingLeft: 10
  },

  botao: {
    width: '60%',
    height: 50,
    backgroundColor: '#35C02C',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  textobotao: {
    color: '#FFF',
    textAlign:'center',
    fontSize: 20
  }



});
