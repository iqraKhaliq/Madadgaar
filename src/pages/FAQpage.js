import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class FAQ extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text style={styles.txtStyl}>Coming Soon! </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  txtStyl:
  {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:5,
    fontStyle: 'italic'
  },
  container: 
  {
    alignItems: 'baseline',
    flex: 1,
    backgroundColor: '#ffefd5',
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding: 20,
  },
});