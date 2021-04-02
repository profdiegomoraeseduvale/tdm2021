import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class App extends Component {

 constructor(props){
   super(props);

   this.state = {
      nome : ''
   }

   this.mudar = this.mudar.bind(this);

 }

 mudar(texto){
   this.setState({nome: texto})
 }

 render(){
  return (
    <View style={styles.container}>

      <TextInput style={styles.input} onChangeText={this.mudar}/>
     <Text style={styles.texto}>{this.state.nome}</Text>

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
    padding: 10
    
  }

 
  


});


