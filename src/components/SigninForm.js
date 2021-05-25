import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, List, ListItem, TextInput, Text, View, ToastAndroid} from 'react-native';
import firebase from 'firebase';


export default class SigninForm extends Component 
{
    state={
      email:"",
      password:"",
      // mylist:[]
    }
  
    componentDidMount()
    {
      const users = firebase.database().ref("users");
      users.on("value",datasnap=>{
        this.setState({mylist:Object.values(datasnap.val())})
    })
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
          alert('Successfully Logging In');
          this.setState({email:""});
          this.setState({password:""});
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

    const users = firebase.database().ref("users");
    users.push().set({
      email:this.state.email,
      password: this.state.password,
      time:Date.now()
    })
  }
  
  render() 
  {
    
    // const myitems = this.state.mylist.map(item=>{
    //   return(
    //     <ListItem>
    //       <Text>{item.text}</Text>
    //       <Text>{item.time}</Text>
    //       </ListItem>
    //   )
    // })
    
    return (
      <View>
        
        <TextInput 
          value={this.state.email} 
          onChangeText={(email)=>this.setState({email})} 
          style={styles.TextInput} 
          placeholder='Enter Email Address' 
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
   );
  }
}

const styles = StyleSheet.create({
   
    TextInput:{
        width:300,
        marginBottom:30,
        height:60,
        backgroundColor:'#c4332b',
        opacity:0.7,
        borderRadius:25,
        color:'white',
        paddingHorizontal:10,
    },
    loginButton:{
        width:300,
        height:40,
        backgroundColor:'#ad251d',
        opacity:1,
        borderRadius:25,
        alignItems:'center',
        justifyContent: 'center'
        
        
    },
    loginButtonText:{
        color:'white',    
    },
    
  });

