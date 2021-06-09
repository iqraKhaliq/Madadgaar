import React,{Component,useEffect,useState} from 'react';
import {View, Text, Button,Image, StyleSheet, ToastAndroid, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as firebase from "firebase";

//id created for item
// global.subId= uuidGenerator();

export default function ItemDisplay({route,navigation})
{
    //product selected id
    const {id}= route.params;
    //logged in user uid
    const uid= firebase.auth().currentUser.uid;

    const [views,setViews]= useState(false);
    const [color,setColor]= useState(false);
    const [users,setUsers]= useState([]);
    const [show,setShow]= useState(false);

    const itemData= async() =>{
        try
        {
            await firebase.firestore()
                        .collection('ads')
                        .doc(id)
                        .get()
                        .then(snapShot =>{
                            if(snapShot.exists)
                            {
                                console.log(snapShot.data());
                                setUsers(snapShot.data());
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
                            style={{width: 260}}
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
                            
                    <View style={styles.VIcon}>
                        <MaterialCommunityIcons 
                            name='cards-heart' 
                            size={30} 
                            color={color ? "red": "white"}  
                            style={styles.icon} 
                            onPress={addTo}
                            />
                    </View>
                </View>

                <View style={styles.DataView}>
                    <Button 
                        color={"#fa8072"} 
                        title="Request Item"
                        size={25}  
                        onPress={requestData}
                        disabled={views}
                        />

                    {views && 
                        <View style={styles.VD}>
                            <Text style={styles.Dstyle}>Donor's Name: {users.DonorName}</Text>
                            <Text style={styles.Dstyle}>Phone Number: {users.Phone}</Text>
                            <Text style={styles.Dstyle}>Area: {users.Area}</Text>
                            <Text style={styles.Dstyle}>City: {users.City}</Text>
                        </View>}            
                
                    {views && <Button 
                                title="Remove Request" 
                                color={"#fa8072"}
                                size={25}
                                onPress={removeData}
                                disabled={!views}
                                />}
                </View>
            </View>
        </ScrollView>                                 
        </View>
    )

    async function addTo()
    {
        const reference=firebase.firestore().collection("favorites").doc(uid).collection('myfav');

        try
        {
            if(color === true)
            {
                try
                {
                    await reference.doc(id).delete();
                    
                    //color set to white
                    setColor(false);
                    ToastAndroid.show('Removed from Favorites', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
                catch(e)
                {
                    ToastAndroid.show(e.toString(), ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
            }
            else if(color === false)
            {
                try
                {
                    await reference.doc(id).set({
                        ProductId: id,
                        Image1: users.Image1,
                        Image2: users.Image2,
                        Image3: users.Image3,
                        Image4: users.Image4,
                        Area: users.Area,
                        City: users.City,
                        DonorName:users.DonorName,
                        Description: users.Description,
                        Phone: users.Phone,
                        ProductName: users.ProductName,
                    },{merge: true});
                
                    //color set to red
                    setColor(true);
                    ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
                catch(e)
                {
                    ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
            }
        }
        catch(e)
        {
            ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
        }
    }

    async function requestData()
    {
        const reference=firebase.firestore().collection("requests").doc(uid).collection("myRequest");
        
        try
        {
            await reference.doc(id).set({
                ProductId:id,
                Image1: users.Image1,
                Image2: users.Image2,
                Image3: users.Image3,
                Image4: users.Image4,
                Area: users.Area,
                City: users.City,
                DonorName:users.DonorName,
                Description: users.Description,
                Phone: users.Phone,
                ProductName: users.ProductName,
            },{merge: true});
            
            setViews(true);
            ToastAndroid.show('Item Requested',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
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
            ToastAndroid.show(e.toString(), ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }

    async function removeData()
    {
        const reference=firebase.firestore().collection("requests").doc(uid).collection("myRequest");

        try
        {
            await reference.doc(id).delete();
            ToastAndroid.show('Request Canceled', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            // this.setState({views: false});
            setViews(false);
        }
        catch(e)
        {
            ToastAndroid.show(e.toString(), ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }
}



// function uuidGenerator()
// {
//     return 'xyxyxyxxxxxy'.replace(/[xy]/g, function(c){
//       var a= Math.random() * 16 | 0,v = c == 'x' ? a: (a & 0x3|0x8);
//       return v.toString(16);
//     });
// }


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
    //   padding: 5,
    //   margin: 5,
    },
    VD:
    {
        backgroundColor: 'darksalmon',
        flexDirection: 'column',
        padding: 5,
        margin: 5,
        width: '80%',
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
        width: 280,
        height: 280,
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
  
