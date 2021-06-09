import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Button, ToastAndroid, ScrollView, Alert} from 'react-native';
import Logo from '../components/Logo';
import * as firebase from "firebase";

export default class SignupForm extends Component 
{
  state={
    fname: "",
    lname: "",
    city: "",
    area: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPass: "",
    profileImage:"https://firebasestorage.googleapis.com/v0/b/fir-rn-ca064.appspot.com/o/ProfileImages%2Fteenager.png?alt=media&token=1220078d-47e9-4841-9239-7898a6f092d9",
  };

  render() 
  {
    return (
      <View style={styles.MV}>
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          >
          <View>
    
            <Logo/>
          
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter First Name' 
              placeholderTextColor='#fff'
              value={this.state.fname}
              onChangeText={(fname)=> this.setState({fname})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Last Name' 
              placeholderTextColor='#fff'
              value={this.state.lname}
              onChangeText={(lname)=> this.setState({lname})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter City' 
              placeholderTextColor='#fff'
              value={this.state.city}
              onChangeText={(city)=> this.setState({city})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Area' 
              placeholderTextColor='#fff'
              value={this.state.area}
              onChangeText={(area)=> this.setState({area})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Address' 
              placeholderTextColor='#fff'
              value={this.state.address}
              onChangeText={(address)=> this.setState({address})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Phone Number' 
              keyboardType='number-pad'
              placeholderTextColor='#fff'
              value={this.state.phone}
              onChangeText={(phone)=> this.setState({phone})}
              />
          
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Email Address' 
              placeholderTextColor='#fff'
              keyboardType='email-address'
              value={this.state.email}
              onChangeText={(email)=> this.setState({email})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Enter Password' 
              secureTextEntry={true} 
              placeholderTextColor='#fff'
              minLength={6}
              value={this.state.password}
              onChangeText={(password)=> this.setState({password})}
              />
        
            <TextInput 
              style={styles.TextInput} 
              placeholder='Confirm Password' 
              secureTextEntry={true} 
              placeholderTextColor='#fff'
              value={this.state.confirmPass}
              onChangeText={(confirmPass)=> this.setState({confirmPass})}
              />

            <Button 
              color={"#ad251d"}
              title="SIGN UP"  
              style={styles.SignupButton} 
              onPress={this.addUser} 
            />

            <View style={styles.signinText}>
              <Text 
                style={styles.textA}
                >Already have an account?</Text>
              <Text 
                style={styles.textS} 
                onPress={() => this.props.navigation.navigate('Signin')}
                >SIGN IN</Text>
            </View>
          </View>
        </ScrollView>      
      </View>
   );
  }

  addUser= async() =>{
    const reference= firebase.auth();

    try{
      if(this.state.fname === "")
      {
        ToastAndroid.show('First Name Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.lname === "")
      {
        ToastAndroid.show('Last Name Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.city === "")
      {
        ToastAndroid.show('City Name Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.area === "")
      {
        ToastAndroid.show('Area Name Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.address === "")
      {
        ToastAndroid.show('Address Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.phone === "")
      {
        ToastAndroid.show('Phone Number Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.password === "")
      {
        ToastAndroid.show('Password Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.confirmPass === "")
      {
        ToastAndroid.show('Confirm Password Missing', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.password !== this.state.confirmPass)
      {
        ToastAndroid.show('Confirm Password Incorrect', ToastAndroid.LONG, ToastAndroid.BOTTOM);
      }
      else if((this.state.fname !== "") && (this.state.lname !== "") && (this.state.city !== "") &&
        (this.state.area !== "") && (this.state.address !== "") && (this.state.phone !== "") && 
          (this.state.password === this.state.confirmPass ))
      {
        reference.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((data)=>{
          alert('Account has been created :) Thank You!!');
          
          const user= reference.currentUser;
          user.sendEmailVerification();
          Alert.alert(
            'Important Note',
            `Check your Email Address to verify email.\nThank You`,
            [{
                text: 'Ok',
                style: 'cancel'
            }]
          )

          ToastAndroid.show('Successful', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          // this.setState({id: data.user.uid});
          const id=data.user.uid;
          this.saveData(id);
          this.props.navigation.navigate('Signin');
        })
        .catch((e)=>{
          ToastAndroid.show(e.toString(), ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        })
      }
    }
    catch(e)
    {
      ToastAndroid.show('Try Again ...','Not Successful', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }
  }

  saveData= async(id)=> {
    const ref=firebase.firestore().collection("userData");

    try
    {
      await ref.doc(id).set({
        uid: id,
        FirstName: this.state.fname,
        LastName: this.state.lname,
        City: this.state.city,
        Area: this.state.area,
        Address: this.state.address,
        PhoneNumber: this.state.phone,
        Email: this.state.email,
        ProfileImage: this.state.profileImage,
      });

      this.setState({fname: ""});
      this.setState({lname: ""});
      this.setState({city: ""});
      this.setState({area: ""});
      this.setState({address: ""});
      this.setState({phone: ""});
      this.setState({email: ""});
      this.setState({password: ""});
      this.setState({confirmPass: ""});
    }
    catch(e)
    {
      ToastAndroid.show('Data Entry Failed :(',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
    }
  }
}


const styles = StyleSheet.create(
  {
    container: 
    {
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    MV:
    {
      padding:15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
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
    SignupButton:
    {
      width:300,
      height:40,
      backgroundColor:'#ad251d',
      opacity:1,
      borderRadius:15,
      alignItems:'center',
      justifyContent: 'center',
    },
    SignupButtonText:
    {
      color:'white',    
    },
    signinText:
    {
      marginTop:50,
      marginBottom: 50,
      alignItems:'center',       
    }
  });


