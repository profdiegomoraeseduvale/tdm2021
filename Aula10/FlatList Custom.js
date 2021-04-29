import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default class Aula9 extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      lista : [

       {id:'1', nome:'Mario Bros 64', console:'Nintendo 64', valor: 'R$120,00',
        foto: require('./src/img/mario.png')},
       
       {id:'2', nome:'Mortal Kombat', console:'Playstation 5', valor: 'R$220,00',
        foto: require('./src/img/mk.png')},
       
       {id:'3', nome:'Resident Evil', console:'XBox One', valor: 'R$200,00',
        foto: require('./src/img/resident.png')},
        
        {id:'4', nome:'Mario Bros 64', console:'Nintendo 64', valor: 'R$120,00',
        foto: require('./src/img/mario.png')},
       
       {id:'5', nome:'Mortal Kombat', console:'Playstation 5', valor: 'R$220,00',
        foto: require('./src/img/mk.png')},
       
       {id:'6', nome:'Resident Evil', console:'XBox One', valor: 'R$200,00',
        foto: require('./src/img/resident.png')},
        
        {id:'7', nome:'Mario Bros 64', console:'Nintendo 64', valor: 'R$120,00',
        foto: require('./src/img/mario.png')},
       
       {id:'8', nome:'Mortal Kombat', console:'Playstation 5', valor: 'R$220,00',
        foto: require('./src/img/mk.png')},
       
       {id:'9', nome:'Resident Evil', console:'XBox One', valor: 'R$200,00',
        foto: require('./src/img/resident.png')} 

      ]

    }
  }



 render(){
  return (

  

   <View style={styles.container}>
     <SafeAreaView backgroundColor={'grey'}>
     
     <FlatList
      
      data={this.state.lista}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <Jogo data={item}/>}
     
     />

</SafeAreaView>

   </View>
   
   );
 }
}

class Jogo extends Component{
  render(){
    return(
      <View style={styles.areaitem}>

      <Image style={styles.foto} source={this.props.data.foto}/> 
      
      <View style={styles.areadescricao}>
        <Text style={styles.texto}>{this.props.data.nome}</Text>
        <Text style={styles.texto}>{this.props.data.console}</Text>
        <Text style={styles.texto}>{this.props.data.valor}</Text>
      </View>

     <View style={styles.areabotao}>     
        <TouchableOpacity style={styles.botao}>        
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

  areaitem: {
    backgroundColor: '#333',
    height: 120,
    marginBottom: 2,
    justifyContent: 'center',
    flexDirection: 'row'
  },

  areadescricao: {
    justifyContent: 'center',
    width: 180
  },

  areabotao: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,      
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10
  },

  texto: {
   color:'white',
   fontSize:20
  },

  botao: {

    backgroundColor:'green',
    height: 50,
    justifyContent:'center',
    borderRadius: 10,
    padding: 10

  },

  

});
