import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View,Button } from 'react-native';

export default class Logo extends Component 
{
  render() 
  {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    stretch: {
      width: 300,
      height: 300,
      
    },
  });
  

