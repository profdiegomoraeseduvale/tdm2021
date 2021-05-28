import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
 
    const navigator = useNavigation();

    function irSobre(){
        navigator.navigate('Sobre', {nome:'Diego', email:'diego@teste.com'});
    }

 return (
   <View style={styles.container}>
       <Text style={styles.titulo}>Você está na página Home</Text>
       <TouchableOpacity style={styles.botao} onPress={irSobre}>
           <Text style={styles.textobotao}>Sobre</Text>           
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({

 container: {
    flex: 1,
    justifyContent: 'center'
 },

 titulo: {
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
 },

 botao: {
    alignSelf: 'center',
    width: '60%',
    height: 40,
    backgroundColor: 'green',
    borderRadius: 3,
    justifyContent: 'center',
    marginTop: 60
 },

 textobotao: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
 }


});