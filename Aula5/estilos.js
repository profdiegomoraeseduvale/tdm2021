import React from 'react';
import {StyleSheet} from 'react-native';

const stylesnew = StyleSheet.create({

    container: {
      backgroundColor: 'green',
      flex: 1,
      justifyContent: 'center'
  
    },
  
    texto: {
        
      textAlign:'center', 
      fontSize: 40, 
      color: 'white'
  
    },
  
    input: {
  
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
      height: 45,
      margin: 20,
      fontSize: 20, 
      padding : 10  
  
    },
  
    botao: {
      backgroundColor: 'grey',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 30,
      marginRight: 30,
      height: 40
    },
  
    textobotao: {
     
      textAlign: 'center',
      color: 'blue',
      fontSize: 25
      
  
    }
  
  
  
  })

  export default stylesnew;