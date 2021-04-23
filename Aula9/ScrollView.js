import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

export default class Aula9 extends Component {
 render(){
  return (
    <View style={styles.container}>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.box1h}></View>
        <View style={styles.box2h}></View>
        <View style={styles.box3h}></View>
        <View style={styles.box4h}></View> 
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1v}></View>
        <View style={styles.box2v}></View>
        <View style={styles.box3v}></View>
        <View style={styles.box4v}></View> 
      </ScrollView>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.box1h}></View>
        <View style={styles.box2h}></View>
        <View style={styles.box3h}></View>
        <View style={styles.box4h}></View> 
      </ScrollView>

         

    </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

  box1h: {
    backgroundColor: "red",
    height: 250,
    width: 150
  },

  box2h: {
  
    backgroundColor: "green",
    height: 250,
    width: 150
  },

  box3h: {
    
    backgroundColor: "blue",
    height: 250,
    width: 150
  },

  box4h: {
  
    backgroundColor: "yellow",
    height: 250,
    width: 150
  },


  box1v: {
    backgroundColor: "red",
    height: 250,
    
  },

  box2v: {
  
    backgroundColor: "green",
    height: 250,
    
  },

  box3v: {
    
    backgroundColor: "blue",
    height: 250,
   
  },

  box4v: {
  
    backgroundColor: "yellow",
    height: 250,
    
  },

});
