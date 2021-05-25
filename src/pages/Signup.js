import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/SignupForm';

export class Signup extends React.Component {
  render() {
  return (
    
    <View style={styles.container}>
    <ScrollView>
      <Logo/>
      <Form type="SignupForm" />
      <View style={styles.signinText}>
            <Text style={{fontSize:20}}>Already have an account?</Text>

            <Text style={{fontSize:20, fontWeight:'bold', marginTop:5, textDecorationLine: 'underline'}} 
            onPress={() => this.props.navigation.navigate('Signin')}>SIGN IN</Text>
           
            </View>
    </ScrollView>
    </View>
   );
  }
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    
  },
  logoText:{
    color: '#ef5350',
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  signinText:{
    marginTop:50,
    marginBottom: 50,
    alignItems:'center',  
    
}
});
