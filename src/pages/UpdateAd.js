import React, { useState,Component, useEffect } from "react";
import { Button, Image,TextInput, View, Platform,StyleSheet, Picker,Text, ToastAndroid,ScrollView } from "react-native";
import * as firebase from "firebase"; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import * as permissions from 'expo-permissions';

export function UpdateAd({route,navigation})
{
  return(
    <View style={styles.viewer}>
      <ScrollView 
        vertical={true}
        showsVerticalScrollIndicator={false}
        >
        <View >
                  <TextInput 
                    style={styles.TextInput} 
                    placeholder='PRODUCT NAME' 
                    placeholderTextColor='#c4332b'
                    // onChangeText={(productName) => this.setState({productName})}
                    // value={this.state.productName}
                    />
                  <Picker 
                    mode="dropdown"
                    // selectedValue={this.state.list}
                    // style={{height:40, width: 340}}
                    backgroundColor={'#e9967a'}
                    style={styles.dropStyle}
                    // onValueChange={(itmVal) => {this.updateList(itmVal);}}
                    placeholder='Select Category' 
                    >
                      <Picker.Item label="Select Category" />
                      <Picker.Item label="Accessories" value="accessories"/>
                      <Picker.Item label="Books" value="books"/>
                      <Picker.Item label="Stationary" value="stationary"/>
                      <Picker.Item label="Clothes" value="clothes"/>
                      <Picker.Item label="Shoes" value="shoes"/>
                      <Picker.Item label="Toys" value="toys" />
                      <Picker.Item label="All" value="all" />
                  </Picker>
                  <TextInput 
                    style={styles.TextInput} 
                    multiline={true} 
                    placeholder='DESCRIPTION' 
                    placeholderTextColor='#c4332b'
                    // onChangeText={(description) => this.setState({description})}
                    // value={this.state.description}
                    />
                  <TextInput 
                    style={styles.TextInput} 
                    placeholder='DONOR NAME' 
                    placeholderTextColor='#c4332b'
                    // onChangeText={(donorName) => this.setState({donorName})}
                    // value={this.state.donorName}
                    />
                  <TextInput 
                    style={styles.TextInput} 
                    placeholder='PHONE NUMBER' 
                    keyboardType='number-pad'
                    placeholderTextColor='#c4332b'
                    // onChangeText={(phone) => this.setState({phone})}
                    // value={this.state.phone}
                    />
                  <TextInput 
                    style={styles.TextInput} 
                    placeholder='AREA' 
                    placeholderTextColor='#c4332b'
                    // onChangeText={(area) => this.setState({area})}
                    // value={this.state.area}
                    />
                  <TextInput 
                    style={styles.TextInput} 
                    placeholder='CITY' 
                    placeholderTextColor='#c4332b'
                    // onChangeText={(city) => this.setState({city})}
                    // value={this.state.city}
                    />
                    <Button 
                    color={"#fa8072"} 
                    title="SUBMIT"  
                    style={styles.buttonStyl} 
                    // onPress={this.addData} 
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
        paddingTop:50, 
        backgroundColor: '#ffe4e1',
        height: '100%',
        padding:10,
        margin: 10,
        // borderRadius:15,
    },
    TextInput:
    {
        width:350,
        marginTop:10,
        marginBottom:5,
        height:40,
        backgroundColor:'#e9967a',
        opacity:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingTop:10,
        color: 'darkred',
    },
    dropStyle:
    {
        color:'darkred',
        paddingTop:10,
        marginTop:5,
        backgroundColor: '#e9967a',  
    },
    buttonStyl:
    {
        flex:2,
    },
});

export default UpdateAd;