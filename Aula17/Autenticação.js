import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from './src/firebaseCon';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(''); //CRIADA STATE PARA SALVAR O USUARIO LOGADO
 
  /* async function cadastrar(){
    if(email!=='' & senha!==''){
      
      let usuario = await firebase.database().ref('Usuario');
      let chave = usuario.push().key;

      usuario.child(chave).set({
        email: email,
        senha: senha
      });

    }else{
      alert('Preencher Campos!');
    }
  } */

  async function cadastrar(){
   
   await firebase.auth().createUserWithEmailAndPassword(email, senha)
   .then((value)=>{
      alert('Cadastrado com sucesso: '+value.user.email);
   })
   .catch((error)=>{
       if(error.code==='auth/weak-password'){
         alert('Senha deve conter no míninmo 6 caracteres!');
         return;
       }

       if(error.code==='auth/invalid-email'){
        alert('E-mail informado não é válido!');
        return;
      }else{
        alert('Ocorreu um erro!');
      }

   })

  }

  async function logar(){

    await firebase.auth().signInWithEmailAndPassword(email,senha)
    .then((value)=>{
       alert('Acesso realizado com sucesso!'+value.user.email);
       setUser(value.user.email); //PASSA O USUÁRIO LOGADO PARA STATE USER
    })
    .catch((error)=>{
      alert('Ocorreu um erro ao logar!');
      return;
    })

  }

  async function logout(){
    await firebase.auth().signOut();
    setUser(''); //A STATE USER É LIMPADA APÓS O LOGOUT
  }

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:25, marginBottom:30}}>{user}</Text> 

      <TextInput        
        style={styles.input}
        placeholder="Digite o e-mail"
        autoCapitalize="none"
        onChangeText={(texto) => setEmail(texto)}
        value={email}      
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        secureTextEntry={true}
        onChangeText={(texto)=>setSenha(texto)}
        value={senha}
      />

      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textobotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={logar}>
        <Text style={styles.textobotao}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={logout}>
        <Text style={styles.textobotao}>Logout</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: "80%",
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    marginBottom: 30,
    paddingLeft: 10
  },

  botao: {
    width: "50%",
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#9400D3",
    justifyContent: "center",
    marginBottom: 20
  },

  textobotao: {
    fontSize: 22,
    textAlign: "center",
    color: "white"
  }
});
