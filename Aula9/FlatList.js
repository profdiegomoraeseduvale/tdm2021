import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

export default class Aula9 extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      lista : [

       {id:'1', nome:'Diego', cidade:'Botucatu'},
       {id:'2', nome:'Brick', cidade:'Avaré'},
       {id:'3', nome:'Leonardo', cidade:'Itaí'},
       {id:'4', nome:'Maria Laura', cidade:'Cerqueira César'},
       {id:'5', nome:'Diego', cidade:'Botucatu'},
       {id:'6', nome:'Brick', cidade:'Avaré'},
       {id:'7', nome:'Leonardo', cidade:'Itaí'},
       {id:'8', nome:'Maria Laura', cidade:'Cerqueira César'}

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
      renderItem={({item})=> <Pessoa data={item}/>}
     
     />

</SafeAreaView>

   </View>
   
   );
 }
}

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaitem}>
       <Text style={styles.texto}>Nome: {this.props.data.nome}</Text>
       <Text style={styles.texto}>Cidade: {this.props.data.cidade}</Text>
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
    marginBottom: 5,
    justifyContent: 'center'
  },

  texto: {
   color:'white',
   fontSize:20
  },

  

});
