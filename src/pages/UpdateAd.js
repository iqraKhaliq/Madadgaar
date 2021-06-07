import React, { useState,Component, useEffect } from "react";
import { Button, Image,TextInput, View, Platform,StyleSheet, Picker,Text, ToastAndroid,ScrollView} from "react-native";
import * as firebase from "firebase"; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import * as permissions from 'expo-permissions';

export function UpdateAd({route,navigation})
{
  const [data,setData] =useState(null);
  const {id}=route.params;
  const uid=firebase.auth().currentUser.uid;

  const getData= async() => {
    try
    {
      await firebase
            .firestore()
            .collection('ads')
            .doc(id)
            .get()
            .then(doc => {
              setData(doc.data());
              console.log(doc.data());
            })
    }
    catch(e)
    {
      ToastAndroid.show('No data found',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
    }
  }

  useEffect(()=> {
    getData();
  },[]);

  const updateData= async() => {
    try
    {
      await firebase
              .firestore()
              .collection('ads')
              .doc(id)
              .update({
                ProductName: data.ProductName, 
                Category: data.Category,
                Description: data.Description,
                DonorName: data.DonorName,
                Phone: data.Phone,
                City: data.City,
                Area: data.Area,
              })
              .then(() => {
                ToastAndroid.show('Ad details Successfully Updated',ToastAndroid.LONG,ToastAndroid.BOTTOM);
                navigation.navigate('MyAds');
                // navigation.goBack();
              })
    }
    catch(e)
    {
      ToastAndroid.show('Failed to Update Ad', ToastAndroid.LONG,ToastAndroid.BOTTOM);
    }
  }

  return(
    <View style={styles.viewer}>
      <ScrollView 
        vertical={true}
        showsVerticalScrollIndicator={false}
        >
        <View >
          <Text style={styles.headerStyle}>PRODUCT NAME:</Text>
          
          <TextInput 
            style={styles.TextInput} 
            placeholder='PRODUCT NAME' 
            placeholderTextColor='#c4332b'
            onChangeText={(ProductName) => setData({...data, ProductName: ProductName})}
            value={data ? data.ProductName: ''}
            />
          
          <Text style={styles.headerStyle}>CATEGORY:</Text>

          <Picker 
            mode="dropdown"
            selectedValue={data ? data.Category: ''}
            backgroundColor={'#e9967a'}
            style={styles.dropStyle}
            onValueChange={(Category) => setData({...data, Category: Category})}
            placeholder='Select Category' 
            >
              <Picker.Item label="Accessories" value="accessories"/>
              <Picker.Item label="Books" value="books"/>
              <Picker.Item label="Stationary" value="stationary"/>
              <Picker.Item label="Clothes" value="clothes"/>
              <Picker.Item label="Shoes" value="shoes"/>
              <Picker.Item label="Toys" value="toys" />
              <Picker.Item label="All" value="all" />
          </Picker>

          <Text style={styles.headerStyle}>DESCRIPTION</Text>
                  
          <TextInput 
              style={styles.TextInput} 
              multiline={true} 
              placeholder='DESCRIPTION' 
              placeholderTextColor='#c4332b'
              onChangeText={(Description) => setData({...data, Description: Description})}
              value={data ? data.Description: ''}
              />
          
          <Text style={styles.headerStyle}>DONOR NAME:</Text>  
          
          <TextInput 
            style={styles.TextInput} 
            placeholder='DONOR NAME' 
            placeholderTextColor='#c4332b'
            onChangeText={(DonorName) => setData({...data, DonorName: DonorName})}
            value={data ? data.DonorName: ''}
            />

          <Text style={styles.headerStyle}>PHONE NUMBER:</Text>

          <TextInput 
            style={styles.TextInput} 
            placeholder='PHONE NUMBER' 
            keyboardType='number-pad'
            placeholderTextColor='#c4332b'
            onChangeText={(Phone) => setData({...data, Phone: Phone})}
            value={data ? data.Phone: ''}
            />

          <Text style={styles.headerStyle}>AREA:</Text>

          <TextInput 
            style={styles.TextInput} 
            placeholder='AREA' 
            placeholderTextColor='#c4332b'
            onChangeText={(Area) => setData({...data, Area: Area})}
            value={data ? data.Area: ''}
            />

          <Text style={styles.headerStyle}>CITY:</Text>

          <TextInput 
            style={styles.TextInput} 
            placeholder='CITY' 
            placeholderTextColor='#c4332b'
            onChangeText={(City) => setData({...data, City: City})}
            value={data ? data.City: ''}
            />

          <Button 
            color={"#fa8072"} 
            title="SUBMIT"  
            onPress={updateData} 
            />
          </View>
        </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
  viewer:
    { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30, 
        backgroundColor: '#ffe4e1',
        height: '100%',
        padding:10,
        margin: 10,
    },
    TextInput:
    {
        width:350,
        marginTop:10,
        marginBottom:10,
        height:40,
        backgroundColor:'#e9967a',
        opacity:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom: 10,
        color: 'darkred',
        fontSize: 15,
    },
    dropStyle:
    {
        color:'darkred',
        paddingTop:10,
        marginTop:10,
        paddingBottom: 10,
        marginBottom:10,
        backgroundColor: '#e9967a',
        fontSize: 15,  
    },
    headerStyle:
    {
        color: 'maroon',
        fontSize: 20,
        fontWeight: '900',
    },
});

export default UpdateAd;