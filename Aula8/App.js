import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Aula8 extends Component {

 constructor(props){
   super(props);

   this.state = {

    textofrase:'',
    img:require('./src/img/biscoito.png')

   }

   this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
   this.novoBiscoito = this.novoBiscoito.bind(this);

   this.frases = [
      'A vida trará coisas boas se tiveres paciência',
      'Não compense na ira o que lhe falta na razão',
      'A maior de todas as torres começa no solo',
      'Não há que ser forte. Há que ser flexível',
      'Siga os bons e aprenda com eles'
        
  ]

 }

quebrarBiscoito(){
 let numAleatorio = Math.floor(Math.random()*this.frases.length);
  this.setState({
    
    textofrase: this.frases[numAleatorio],
    img:require('./src/img/biscoitoAberto.png') 

  })}  

  novoBiscoito(){
    this.setState({
    
      textofrase: '',
      img:require('./src/img/biscoitoAberto.png') 
  
    })
  }

 render(){
  return (
    <View style={styles.container}>
     
      <Image
       style={styles.imagem}
       source={this.state.img}
      />

      <Text style={styles.texto}>{this.state.textofrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
         <Text style={styles.textobotao}>Quebrar o Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={this.novoBiscoito}>
         <Text style={styles.textobotao}>Novo Biscoito</Text>
      </TouchableOpacity>

    </View>
   );
 }
}

const styles = StyleSheet.create({

 container: {
   flex: 1,
   justifyContent:'center',
   alignItems:'center',

 },

 imagem: {

   width: 250,
   height: 250

 },

 texto: {
   fontSize: 20,
   marginBottom: 20,
   fontStyle:'italic'
 },

 botao: {
   width: 300,
   height: 40,
   justifyContent:'center',
   borderWidth: 1,
   borderColor: 'red',
   borderRadius: 20,
   marginBottom: 20
 },
 
 textobotao: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20
 }

});