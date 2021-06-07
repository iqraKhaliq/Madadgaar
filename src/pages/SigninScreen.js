import * as React from 'react';
import { View, Text, SafeAreaView,ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/SigninForm';

const SigninScreen = ({ route, navigation }) => {
  return (
    <ScrollView>
     <View style={styles.container}>
    
      
      <Logo/>
      <Form type="SigninForm" />
      <View style={styles.signupText}>
            <Text style={{fontSize:20}}>Don't have an account?</Text>
            <Text style={{fontSize:20, fontWeight:'bold', marginTop:5, textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('Signup')}>SIGN UP</Text>
            </View>
    
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logoText:{
      color: '#ef5350',
      fontWeight: 'bold',
      fontSize: 30,
      
    },
    signupText:{
      marginTop:50,
      marginBottom: 50,
      alignItems:'center',  
      
  }
  });
export default SigninScreen;