import React, { useState, useEffect,useContext } from 'react';
import { Platform, StatusBar,SafeAreaView, useRef, Pressable, ToastAndroid, StyleSheet, Text, View,TextInput, TouchableOpacity,Image ,Alert} from 'react-native';
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


const EditProfile = ({route,navigation}) => { 
{
    const [data, setdata] = useState(null);
    const user= firebase.auth().currentUser.uid; 
    const [image,setImage]= useState(null);
    const [show, setShow] =useState(false);

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
              ProfileImage: image,
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
         ToastAndroid.show(e.toString(), ToastAndroid.SHORT, ToastAndroid.BOTTOM);
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
             setShow(true);
           }
         })
      }
      catch(e)
      {
        ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
      }
      
    }

    useEffect(() => {
      getUser();
    }, []);

    const pickImg = async () => {
      let result1= await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 4],
           quality: 1,
         });
   
       if (!result1.cancelled) 
       {
         const name= 'ProfileImage';
         _handleImage(result1,name);
       }
    };

    //preparing image to store in firebase storage
    const _handleImage=async (result1,name)=>{
      try{
        // const id= uuidGenerator();
        if(name == 'ProfileImage')
        {
          const loadingUrl= await uploadImage(result1.uri,user,name);
          setImage(loadingUrl);
        }
      }
      catch(e)
      {
        console.log(e);
        alert('Opps uploading image failed :(');
      }
    }
   
    return (
    <View style={styles.container}>
      <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
        <Text 
            style={{margin:20, fontSize:25,fontWeight:'bold', color: 'maroon'}}
            >{data ? data.FirstName : ''} {data ? data.LastName : ''}</Text>

            <View style={{marginBottom: 20}}>
                <Pressable 
                    onPress={pickImg} 
                    > 
                    {image ==null && <View>
                        <Image
                          source={{uri: data ? data.ProfileImage: '../profiles/teenager.png'}}
                          style={{borderRadius:1000, width: 150,height: 150}}
                          />    
                    </View>}
                    
                    {image != null && <View>
                        <Image
                          source={{uri: image ? image: '../profiles/teenager.png'}}
                          style={{borderRadius:1000, width: 150,height: 150}}
                          />    
                    </View>}
                </Pressable>
            </View>
          
          <Text style={{fontSize: 15, color: 'red'}}>Tap Image to change Profile Picture</Text>
          
            
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

async function uploadImage(uri,id,name)
{
    const blob= await new Promise((resolve,reject)=>{
      const xhr= new XMLHttpRequest();
      xhr.onload= function(){
        resolve(xhr.response);
      };
      xhr.onerror=function(e){
        console.log(e);
        reject(new TypeError('Network request failure :('));
      };
      xhr.responseType='blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  
    const ref= firebase.storage()
      .ref("ProfileImages/"+ id)
      .child(name);
    
    const snapshot= await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL();
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
