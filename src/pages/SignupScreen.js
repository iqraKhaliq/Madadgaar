import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView,ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/SignupForm';

const SignupScreen = ({ route, navigation }) => {
  return (
    <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
    
      <Logo/>
      <Form type="SignupForm" />
      <View style={styles.signinText}>
            <Text style={{fontSize:20}}>Already have an account?</Text>

            <Text style={{fontSize:20, fontWeight:'bold', marginTop:5, textDecorationLine: 'underline'}} 
            onPress={() => navigation.navigate('Signin')}>SIGN IN</Text>
           
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
    
    signinText:{
        marginTop:50,
      marginBottom: 50,
      alignItems:'center',    
    },
  });


export default SignupScreen;