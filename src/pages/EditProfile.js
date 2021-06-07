import React, { useState, useEffect,useContext } from 'react';
import { Platform, StatusBar,SafeAreaView, useRef, Pressable, ToastAndroid } from 'react-native';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import reanimated from 'react-native-reanimated';
import Animated from "react-native-reanimated";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';


const EditProfile = ({route,navigation}) => { 
{
    const [ data, setdata] = useState(null);
    const user= firebase.auth().currentUser.uid; 

    const handleUpdate = async() => {
       try
       {
          firebase
            .firestore()
            .collection('userData')
            .doc(user)
            .update({
              FirstName: data.FirstName,
              LastName: data.LastName,
              PhoneNumber: data.PhoneNumber,
              Area: data.Area,
              City: data.City,
            })
            .then(() => {
              console.log('User Updated!');
              Alert.alert(
                'Profile Updated!',
                'Your profile has been updated successfully.'
              );
              // navigation.navigate('Account');
              navigation.goBack();

            })
      }
       catch(e)
       {
         ToastAndroid.show('Network Failed :(', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
       }
       
    }
   
    const getUser = async() => {
      try
      {
        await
        firebase 
         .firestore()
         .collection('userData')
         .doc( user)
         .get()
         .then((documentSnapshot) => {
           if( documentSnapshot.exists ) 
           {
             console.log('User Data', documentSnapshot.data());
             setdata(documentSnapshot.data());
           }
         })
      }
      catch(e)
      {
        ToastAndroid.show('No dat found',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
      }
      
    }

    useEffect(() => {
      getUser();
    }, []);

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
            > {data ? data.FirstName : ''} {data ? data.LastName : ''}</Text>
            
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor= "#666666"
            autocorrect={false}
            value={data ? data.FirstName : ''}
            onChangeText={(txt) => setdata({...data, FirstName: txt})}
            //onPress={getUser}
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
            value={data ? data.LastName : ''}
            onChangeText={(txt) => setdata({...data, LastName: txt})}
            autoCorrect={false}
            style={styles.textInput} 
            >
          </TextInput>
        </View>
          
        <View style={styles.action}>
          <Feather name="map" size={20} />
            <TextInput
                placeholder="Area"
                keyboardType='number-pad'
                placeholderTextColor= "#666666"
                autocorrect={false}
                value={data ? data.Area : ''}
                onChangeText={(txt) => setdata({...data, Area: txt})}
                style={styles.textInput} >
            </TextInput>
        </View>

       

        <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} />
            <TextInput
                placeholder="City"
                placeholderTextColor= "#666666"
                autocorrect={false}
                value={data ? data.City : ''}
                onChangeText={(txt) => setdata({...data, City: txt})}
                style={styles.textInput} >
            </TextInput>
        </View>

        
        <TouchableOpacity 
            style={styles.commandButton} 
            onPress={handleUpdate}
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
