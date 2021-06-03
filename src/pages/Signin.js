import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';
import Logo from '../components/Logo';

export class Signin extends React.Component 
{
  state={
    email:"",
    password:"",
  }

  saveitem()
  {
    const reference=firebase.auth();

    try{
      if(this.state.email === "")
      {
        ToastAndroid.show('Email Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.password === "")
      {
        ToastAndroid.show('Password Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if((this.state.email !== "") && (this.state.password !== ""))
      {
        reference.signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((data)=>
        {
          ToastAndroid.show('LogIn Successful', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          // alert('Successfully Logging In');
          this.setState({email:""});
          this.setState({password:""});
          this.props.navigation.navigate('Main');
        })
        .catch((e)=>{
          ToastAndroid.show('Email or Password Incorrect', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        });
      }
    }
    catch(e)
    {
      ToastAndroid.show('LogIn Failed :(', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      alert('Opppsss LogIn Failed :(');
    }

    // const users = firebase.database().ref("users");
    // users.push().set({
    //   email:this.state.email,
    //   password: this.state.password,
    //   time:Date.now()
    // })
  }
  

  render() 
  {
    return (
    
    <View style={styles.container}>
      <ScrollView 
        vertical={true}
        showsVerticalScrollIndicator={false}
        >
        <Logo/>
        
        <View>
          
          <TextInput 
            value={this.state.email} 
            onChangeText={(email)=>this.setState({email})} 
            style={styles.TextInput} 
            placeholder='Enter Email Address'
            keyboardType='email-address'
            placeholderTextColor='#fff'
          />
          
          <TextInput 
            value={this.state.password} 
            onChangeText={(password)=>this.setState({password})} 
            style={styles.TextInput} 
            placeholder='Enter Password' 
            secureTextEntry={true} 
            placeholderTextColor='#fff'
          />
          
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={()=>this.saveitem()}
            >
            <Text style={styles.loginButtonText}>SIGN IN</Text>
          </TouchableOpacity>
         
        </View>
      
        <View style={styles.signupText}>
            <Text
              style={styles.textS}
              // onPress={() => this.props.navigation.navigate('Main')}
              >Forgot Password</Text>
            <Text 
              style={styles.textA}
              >Don't have an account?</Text>
            <Text 
              style={styles.textS}
              onPress={() => this.props.navigation.navigate('Signup')}>SIGN UP</Text>
        </View>
      </ScrollView>
    </View>
   );
  }
}

const styles = StyleSheet.create
({
  textA:
  {
    fontSize:20,
    color: 'darkred',
    marginTop:5,
  },
  textS:
  {
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
    textDecorationLine: 'underline',
    color: 'darkred',
  },
  container: 
  {
    paddingTop:30,
    alignItems: 'center',  
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom:30,
  },
  // logoText:
  // {
  //   color: '#ef5350',
  //   fontWeight: 'bold',
  //   fontSize: 30, 
  // },
  signupText:
  {
    marginTop:50,
    // marginBottom: 50,
    alignItems:'center',
  },
  TextInput:
  {
    width:300,
    marginBottom:20,
    height:60,
    backgroundColor:'#c4332b',
    opacity:0.7,
    borderRadius:15,
    color:'white',
    paddingHorizontal:10,
  },
  loginButton:
  {
    width:300,
    height:40,
    backgroundColor:'#ad251d',
    opacity:1,
    borderRadius:15,
    alignItems:'center',
    justifyContent: 'center',
  },
  loginButtonText:
  {
    color:'white',
  },
});

export default Signin;