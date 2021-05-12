import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

export default class Aula9 extends Component {

 constructor(props){
   super(props);
   
   this.state = {
     
     lista: [

      {id:'1', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'2', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$320,00'},
      {id:'3', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$240,00'},
      {id:'4', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'5', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$120,00'},
      {id:'6', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$120,00'},
      {id:'7', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'8', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$120,00'},
      {id:'9', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$120,00'}
     
     ]    

   };
   
  this.mostrarJogos=this.mostrarJogos.bind(this); 
  this.mostrarFilmes=this.mostrarFilmes.bind(this); 
  this.mostrarConsoles=this.mostrarConsoles.bind(this);  
 }



mostrarJogos(){
  this.setState({
    lista: [
      {id:'1', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'2', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$320,00'},
      {id:'3', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$240,00'},
      {id:'4', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'5', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$120,00'},
      {id:'6', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$120,00'},
      {id:'7', foto: require('./src/img/mario.png'), nome:'Mario Bros', descricao: 'Nintendo 64', valor: 'R$120,00'},
      {id:'8', foto: require('./src/img/mk.png'), nome:'Mortal Kombat', descricao: 'Playstation 5', valor: 'R$120,00'},
      {id:'9', foto: require('./src/img/resident.png'), nome:'Resident Evil', descricao: 'Xbox One', valor: 'R$120,00'}
    ]
 })
 }

 mostrarFilmes(){
  this.setState({
    lista: [
      {id:'1', foto: require('./src/img/starwars.png'), nome:'Star Wars', descricao: 'Blu-ray', valor: 'R$100,00'},
      {id:'2', foto: require('./src/img/backtofuture.jpg'), nome:'De volta para o futuro', descricao: 'DVD', valor: 'R$80,00'},     
    ]
 })
 }

 mostrarConsoles(){
  this.setState({
    lista: [
      {id:'1', foto: require('./src/img/ps4.png'), nome:'Playstation 4', descricao: 'Console', valor: 'R$2500,00'},           
    ]
 })
 }

 

 render(){
  return (   
    
    <View style={styles.container}>

       <View style={styles.menusuperior}>

       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       
       <View>
         <TouchableOpacity style={styles.botaomenu} onPress={this.mostrarJogos}>            
            <Text style={styles.textobotaomenu}>Jogos</Text>
         </TouchableOpacity>
         </View>

         <View >
         <TouchableOpacity style={styles.botaomenu} onPress={this.mostrarFilmes}>            
            <Text style={styles.textobotaomenu}>Filmes</Text>
         </TouchableOpacity>
         </View>

         <View >
         <TouchableOpacity style={styles.botaomenu} onPress={this.mostrarConsoles}>            
            <Text style={styles.textobotaomenu}>Consoles</Text>
         </TouchableOpacity>
         </View>

         </ScrollView>    
        
       </View>  
      
        <FlatList

        data={this.state.lista}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <Jogo data={item}/>}

        />     

    </View>
    
   );
 }
}



class Jogo extends Component{

  render(){
    return(
      
     
     <View style={styles.areajogo}>

       <Image style={styles.foto} source={this.props.data.foto}/>       
      
       <View style={styles.areadescricao}>
       
          <Text style={styles.texto}>{this.props.data.nome}</Text>
          <Text style={styles.texto}>{this.props.data.descricao}</Text>
          <Text style={styles.texto}>{this.props.data.valor}</Text>        
       
       </View>

       <View style={styles.areabotaocomprar}>

            <TouchableOpacity style={styles.botaocomprar}>            
            <Text style={styles.texto}>Comprar</Text>
            </TouchableOpacity>

       </View>
      

    </View>
     

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

  menusuperior: {
    height:120, 
    justifyContent:'flex-start', 
    flexDirection:'row', 
    alignItems:'flex-end',
    marginBottom: 20,
    marginLeft: 10
    
  },

  botaomenu: {
    backgroundColor:'green', 
    width:200, height:90, 
    marginRight: 10, 
    justifyContent:'center',
    borderRadius: 10,    
  },

  textobotaomenu: {
    textAlign:'center', 
    color:'white', 
    fontSize:20
  },

  areajogo: {
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#333',    
    marginBottom: 2
  },

  areadescricao: {
    justifyContent:'center', 
    width:180
  },

  areabotaocomprar: {
    justifyContent:'center', 
    alignItems:'flex-end', 
    flex:1, 
    paddingRight:10
  },

  botaocomprar: {
    backgroundColor:'green',
     height:50,
     justifyContent:'center',
     borderRadius:20
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
    
  },

  texto: {
    color: '#FFF',
    fontSize: 20,
    padding: 5
    
  } 

});

