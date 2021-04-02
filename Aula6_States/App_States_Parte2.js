import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component {

 constructor(props){
   super(props);

   this.state = {
      nome : '',
      email: '',
      inputNome: '',
      inputEmail: ''
   }

   this.mudar = this.mudar.bind(this);

 }

 mudar(){
   this.setState({nome: 'Nome: '+ this.state.inputNome})
   this.setState({email: 'E-mail: '+ this.state.inputEmail})
 }

 render(){
  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input} 
        onChangeText={(texto)=>this.setState({inputNome: texto})}
        placeholder='Digite seu nome'
        keyboardType='default'
      />
       <TextInput 
        style={styles.input} 
        onChangeText={(texto)=>this.setState({inputEmail: texto})}
        placeholder='Digite seu e-mail'
        keyboardType='email-address'
      />
     
     <TouchableOpacity style={styles.botao} onPress={this.mudar}>
       <Text style={styles.textobotao}>Cadastrar</Text>
     </TouchableOpacity>

     <Text style={styles.texto}>{this.state.nome}</Text>
     <Text style={styles.texto}>{this.state.email}</Text>
     

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
    fontSize: 20,
    color: 'blue',
    textAlign: 'center'
    
  },

  input: {
    width: 380,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 7,
    fontSize: 20,
    padding: 10,
    margin: 20
    
  },

  botao: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 7,
    fontSize: 20,
    margin: 20
     
  },

  textobotao: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center'
  }
  


});
