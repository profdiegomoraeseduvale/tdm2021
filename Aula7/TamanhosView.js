import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Aula7 extends Component {

  render() {
      return(

        <View style={styles.container}>
         
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>                

        </View>       

      );
  }

}

const styles = StyleSheet.create({

container: {
  flex:1
},

 box1: {    
    flex:1,
    backgroundColor: 'red'    
 },

 box2: {    
   flex:1,
    backgroundColor: 'green'    
 },

 box3: {    
    flex:1,
    backgroundColor: 'yellow'    
 },

});

export default Aula7;