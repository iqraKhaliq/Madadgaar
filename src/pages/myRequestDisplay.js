import React,{Component,useEffect,useState} from 'react';
import {View, Text, Button,Image, StyleSheet, ToastAndroid, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as firebase from "firebase";

export function myRequestDisplay({route,navigation})
{
    //product selected id
    const {id}= route.params;
    //logged in user uid
    const uid= firebase.auth().currentUser.uid;

    const [views,setViews]= useState(false);
    // const [color,setColor]= useState(false);
    const [users,setUsers]= useState([]);

    const itemData= async() =>{
        try
        {
            await firebase.firestore()
                            .collection('requests')
                            .doc(uid)
                            .collection('myRequest')
                            .doc(id)
                            .get()
                            .then(snapShot =>{
                                if(snapShot.exists)
                                {
                                    console.log(snapShot.data());
                                    setUsers(snapShot.data());
                                }
                            })
        }
        catch(e)
        {
            ToastAndroid.show('Nothing to Display',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
        }             
    }

    useEffect(() => {
        itemData();
    },[]);

    return(
        <View style={styles.container}>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.containerInner}>
                    <View style={styles.Vstyle}>
                        <View style={styles.VInstyle}>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{width: 300}}
                                >
                                    <Image source={{uri: users.Image1}} style={styles.Simage}/>
                                    {!!users.Image2 && <Image source={{uri: users.Image2}} style={styles.Simage}/>}
                                    {!!users.Image3 &&<Image source={{uri: users.Image3}} style={styles.Simage}/>}
                                    {!!users.Image4 && <Image source={{uri: users.Image4}} style={styles.Simage}/>}
                                    
                            </ScrollView>

                            {!!users.Image2 && <Text style={styles.note}>Note: Swipe to see the Picture</Text>}

                            <View style={styles.VInstyle}>
                                <Text style={styles.Fstyle}>{users.ProductName}</Text>
                                <Text style={styles.Estyle}>{users.Description}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.DataView}>
                        <View style={{margin: 8, flexDirection: 'row'}}>
                            <View style={{margin: 5}}>
                                <Button 
                                    color={"#fa8072"} 
                                    title="View Details"
                                    size={25}  
                                    onPress={requestDetails}
                                    disabled={views}
                                    />
                            </View>
                            <View style={{margin: 5}}>
                                <Button 
                                    title="Delete Request" 
                                    color={"#fa8072"}
                                    size={25}
                                    onPress={DeleteData}
                                    disabled={views}
                                    />
                            </View>
                        </View> 
                        
                        {views && 
                            <View style={styles.VD}>
                                {/* {!!users.UserId && <Text style={styles.Dstyle}>Donor Id: {users.UserId}</Text>} */}
                                <Text style={styles.Dstyle}>Donor's Name: {users.DonorName}</Text>
                                <Text style={styles.Dstyle}>Phone Number: {users.Phone}</Text>
                                <Text style={styles.Dstyle}>Area: {users.Area}</Text>
                                <Text style={styles.Dstyle}>City: {users.City}</Text>
                            </View>}            
                            
                        
                        {views && <View style={{margin: 5, paddingLeft: 5}}>
                                    <Button 
                                        title="Remove Details" 
                                        color={"#fa8072"}
                                        size={25}
                                        onPress={removeDetails}
                                        disabled={!views}
                                        />
                                </View>}
                        
                    </View>
                </View>
            </ScrollView>                                 
        </View>
    )

    async function DeleteData()
    {
        const uid= firebase.auth().currentUser.uid;   
        const reference=firebase.firestore().collection('requests').doc(uid).collection('myRequest');
        
        try
        {
            await reference.doc(id).delete();
            navigation.navigate('Account');
            ToastAndroid.show('Removed from Database', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
        }
        catch(e)
        {
            ToastAndroid.show('Network Failed :(', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
            ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
        }
    }

    async function requestDetails()
    {        
        try
        {            
            setViews(true);
            ToastAndroid.show('Displaying Details',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
            Alert.alert(
                'Important',
                `Contact Details of the Donor will be shared with you. Do not misuse it\nThank You`,
                [{
                    text: 'Ok',
                    style: 'cancel'
                }]
            );
        }
        catch(e)
        {
            ToastAndroid.show('Network Failed :(', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }

    async function removeDetails()
    {

        try
        {
            ToastAndroid.show('Removing Details', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            setViews(false);
        }
        catch(e)
        {
            ToastAndroid.show('Network Failed :(', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }
}




const styles= StyleSheet.create({
    container:
    {
      backgroundColor: 'white',
      padding: 10,
      flexDirection: 'column',
      marginBottom: 10,
      height: '100%',
    },
    containerInner:
    {
        backgroundColor: 'lightpink',
        padding: 10,
        flexDirection: 'column',
        margin: 5,   
    },
    Vstyle:
    {
      padding: 5,
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    VInstyle:
    {
      flexDirection: 'column',
      padding: 5,
      margin: 5,
    },
    VD:
    {
        backgroundColor: 'darksalmon',
        flexDirection: 'column',
        padding: 5,
        margin: 5,
        width: '90%',
    },
    Estyle:
    {
      fontSize: 30,
      color: 'maroon',
      marginTop: 5,
    },
    Fstyle:
    {
      fontSize: 40,
      color: 'maroon',
      marginTop: 5,
      fontWeight: 'bold',
      alignItems: 'baseline',
    },
    Dstyle:
    {
      fontSize: 25,
      color: 'maroon',
      margin: 5,
      fontWeight: '500',
    },
    icon:
    {
        flexDirection: 'row-reverse',   
    },
    DataView:
    {
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        color: 'darkred',
        paddingLeft: 10,
        marginLeft: 5,
    },
    Simage:
    {
        width: 290,
        height: 290,
        paddingLeft: 5,
        marginLeft: 5,
    },
    note:
    {
        color: 'red',
        fontWeight: '500',
        fontSize: 20,
    }
  });
  
export default myRequestDisplay;