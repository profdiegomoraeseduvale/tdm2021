import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Sobre({route}) {

    const navigation = useNavigation();

    function irHome(){
        navigation.navigate('Home');
    }

 return (
   <View style={styles.container}>
       <Text style={styles.titulo}>Você está na página Sobre</Text>
       <Text style={styles.titulo}>Nome: {route.params?.nome}</Text>
       <Text style={styles.titulo}>E-mail: {route.params?.email}</Text>
       <TouchableOpacity style={styles.botao} onPress={irHome}>
           <Text style={styles.textobotao}>Home</Text>           
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