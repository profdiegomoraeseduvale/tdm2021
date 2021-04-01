import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import stylesnew from './src/estilos.js';

export default function App() {

   function mensagem(){
     alert('Bem-vindo!');
   }

  return (
    <View style = {stylesnew.container}>
      <Text style = {stylesnew.texto}>Aula 5</Text>
      <TextInput style = {stylesnew.input}
                 placeholder = 'Digite seu nome'
                 placeholderTextColor = 'grey'
                 secureTextEntry = {true}
                 keyboardType = 'numeric'     
      />
      <TouchableOpacity style = {stylesnew.botao} onPress={mensagem}>
        <Text style = {stylesnew.textobotao}>Clique aqui</Text>        
      </TouchableOpacity>           
    </View>
  );
}

