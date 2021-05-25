import React, { useState, useEffect } from 'react';
import { Platform, StatusBar,SafeAreaView, useRef, Pressable } from "react-native";
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import reanimated from 'react-native-reanimated';
import Animated from "react-native-reanimated";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';


export  class EditProfile extends React.Component 
{
  render() {
    
    const pick= async()=>{
        let a= await ImagePicker.launchImageLibraryAsync({
             mediaTypes:ImagePicker.MediaTypeOptions.All,
         });
        };
     
   
    return (
    <View style={styles.container}>
      <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
            <View >
                <Pressable 
                    onPress={pick} 
                    > 
                    <View>
                        <AntDesign 
                            name="picture" 
                            color="#b22222" 
                            size={100}
                            />    
                    </View>
                </Pressable>
            </View>
          
          <Text 
            style={{marginTop:10, fontSize:18,fontWeight:'bold'}}
            >Shaheera Khalid</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor= "#666666"
            autocorrect={false}
            style={styles.textInput} 
            >
          </TextInput>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor= "#666666"
            autocorrect={false}
            style={styles.textInput} 
            >
          </TextInput>
        </View>
          
        <View style={styles.action}>
          <Feather name="phone" size={20} />
            <TextInput
                placeholder="Phone"
                keyboardType='number-pad'
                placeholderTextColor= "#666666"
                autocorrect={false}
                style={styles.textInput} >
            </TextInput>
        </View>

        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} />
            <TextInput
                placeholder="Email"
                placeholderTextColor= "#666666"
                keyboardType='email-address'
                autocorrect={false}
                style={styles.textInput} >
            </TextInput>
        </View>

        <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} />
            <TextInput
                placeholder="City"
                placeholderTextColor= "#666666"
                autocorrect={false}
                style={styles.textInput} >
            </TextInput>
        </View>

        <TouchableOpacity 
            style={styles.commandButton} 
            onPress={() => this.bs.current.snapPoints(0)}
            >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    );
  }
}

  const styles = StyleSheet.create
  ({
    container: 
    {
      flex: 1,
      backgroundColor: 'white',
    },
    imgstyl:
    {
        height:50,
        width:50,
    },

    action: 
    {
      flexDirection: 'row',
      marginTop:10,
      marginBottom:10,
      borderBottomWidth:1,
      borderBottomColor: '#f2f2f2',
      paddingBottom:5,
    },
    textInput:
    {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#ad251d',
    },
    commandButton: 
    {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#ad251d',
      alignItems: 'center',
      marginTop: 10,
    },

    panelButtonTitle: 
    {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    buttons:
    {
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: 'blue',
      padding : 16, 
    },
    bottomsheet: 
    {     
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: 'gray',
        padding : 16,  
    },
    titleStyle: 
    {
        color : 'white',
        textAlign: 'center',
        fontSize : 20,
        marginTop : 10,
    },
  });

export default EditProfile;
