import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Button, ToastAndroid} from 'react-native';
import * as firebase from "firebase";

const actionCodeSettings ={
  // URL to redirect back to. The domain (www.example.com)
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://fir-rn-ca064.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios',
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12',
  },
  dynamicLinkDomain: 'example.page.link',
};

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
  };

  render() 
  {
    return (
      <View>
        
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
      {/* <TouchableOpacity style={styles.SignupButton}>
        <Text 
          style={styles.SignupButtonText}
          onPress={this.addUser}
          >SIGN UP</Text>
      </TouchableOpacity> */}
      
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
          // reference.sendSignInLinkToEmail(this.state.email, actionCodeSettings);
          ToastAndroid.show('Successful', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          // this.setState({id: data.user.uid});
          const id=data.user.uid;
          this.saveData(id);
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


const styles = StyleSheet.create({

    TextInput:{
        width:300,
        marginBottom:20,
        height:60,
        backgroundColor:'#c4332b',
        opacity:0.7,
        borderRadius:25,
        color:'white',
        paddingHorizontal:10,
    },
    SignupButton:{
        width:300,
        height:40,
        backgroundColor:'#ad251d',
        opacity:1,
        borderRadius:25,
        alignItems:'center',
        justifyContent: 'center'
        
        
    },
    SignupButtonText:{
        color:'white',    
    },
    
  });

