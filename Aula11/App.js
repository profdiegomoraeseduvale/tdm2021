import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {

 constructor(props){
   super(props);
   this.state={     
    nome: 'Fulano',
    input: ''
   }
   this.trocarNome = this.trocarNome.bind(this);
 }

async componentDidMount(){

  await AsyncStorage.getItem('nome').then((value)=>{

     this.setState({nome: value})    
  })
  
}

async componentDidUpdate(_,prevState){
   
  const nome = this.state.nome;

 if(prevState!=nome){
   await AsyncStorage.setItem('nome', nome); 
  }

}
 

trocarNome(){
  this.setState({nome: this.state.input});
}

 render(){
  return (
    <View style={styles.container}>

     <Text style={styles.texto}>{this.state.nome}</Text>

     <TextInput
       style={styles.input}
       placeholder='Digite o nome'
       onChangeText={(texto)=>{this.setState({input: texto})}}
     />
     
    <TouchableOpacity style={styles.botao} onPress={this.trocarNome}>
      <Text style={styles.textobotao}>Cadastrar</Text>
    </TouchableOpacity>


    </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 30,
    textAlign: 'center'
  },

  input: {
    width: '80%',
    height: 40,
    fontSize: 20,
    marginBottom: 10
  },

  botao: {
    borderWidth: 1,
    borderColor: 'red',
    width: '80%',
    height: 40
    },
  
   textobotao: {
    fontSize: 20,      
    textAlign: 'center'
    }




});
