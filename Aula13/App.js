import React, {useRef, useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import api from './src/webservices/api';

export default function App() {
 
 const [cep, setCep] = useState(''); 
 const inputRef = useRef(null);
 const [userCep, setUserCep] = useState(null);

 function limparCEP(){
   setCep('');
   setUserCep(null);
   inputRef.current.focus();
 }

 async function buscarCEP(){
    if(cep==''){
      alert('Digite um CEP');
      setCep('');
      return;
    }

    try {
      
     const response = await api.get(`/${cep}/json`);
     setUserCep(response.data);
     Keyboard.dismiss();

    } catch (error) {
      alert('Ocorreu um erro!\n'+'Digite um CEP válido ou verifique sua conexão!');
    }


 }

 return (
   <View style={styles.container}>

     <View style={styles.areainput}>
       <Text style={styles.titulo}>Buscador de CEP</Text>

       <TextInput     
        style={styles.input}
        placeholder='Informe um CEP'
        keyboardType='numeric'
        ref={inputRef}
        value={cep}
        onChangeText={(texto)=>setCep(texto)}
       />
     </View>
     
     <View style={styles.areabtn}>

       <TouchableOpacity style={styles.botaobuscar} onPress={buscarCEP}>
         <Text style={styles.textobotao}>Buscar</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.botaolimpar} onPress={limparCEP}>
         <Text style={styles.textobotao}>Limpar</Text>
       </TouchableOpacity>

     </View>

     {userCep && 
     
     <View style={styles.resultados}>
        <Text>CEP: {userCep.cep}</Text>
        <Text>Logradouro: {userCep.logradouro}</Text>
        <Text>Bairro: {userCep.bairro}</Text>
        <Text>Cidade: {userCep.localidade} </Text>
        <Text>Estado: {userCep.uf}</Text>
     </View>
     
     }
     

   </View>
  );
}

const styles = StyleSheet.create({

  container: {
   flex: 1,
   justifyContent: 'flex-start'  
  },
  
  areainput:{
    marginTop: 20,
    alignItems: 'center'
  },
  
  titulo: {
    fontSize: 25,
    marginBottom: 10
  },
  
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 15
  },
  
  areabtn: {    
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50
  },
  
  botaobuscar: {
    width: 150,
    height: 60,
    backgroundColor: '#3D86CF',
    borderRadius: 2,
    justifyContent: 'center'
  },
  
  botaolimpar: {
    width: 150,
    height: 60,
    backgroundColor: '#33C847',
    justifyContent: 'center'  
  },

  textobotao: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },

  resultados: {
    flex: 1,
    justifyContent:'flex-start',
    margin: 30
  }
})
