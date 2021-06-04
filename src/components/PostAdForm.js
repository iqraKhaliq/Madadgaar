import React, { useState,Component, useEffect } from "react";
import { Button, Image,TextInput, View, Platform,StyleSheet, Picker,Text, ToastAndroid } from "react-native";
import * as firebase from "firebase"; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import * as permissions from 'expo-permissions';

//sets timer for longer period of time,it triggers warnings. So this is to disable those warnings.
console.disableYellowBox= true;

export default class PostAdForm extends React.Component
{
  constructor()
  {
    super();
    global.idNum= uuidGenerator();
  }

  state={
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    productName: "",
    description: "",
    donorName: "",
    phone: "",
    area: "",
    city: "",
    list: "",
    show: "",
  };

  updateList = (list)=>{
    this.setState({list: list});
  }

async componentDidMount()
{
    //permission request for media
    (async () => {
      if (Platform.OS !== 'iOS') {
        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') 
        {
          alert('Permission NOT Granted');
        }
      }
    });
}
  
 
  render()
  {
    let {image1,image2,image3,image4} =this.state;

    return (
      <View style={styles.viewer}>
          <View style={styles.viewer2}>
                <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  > 
                  {!!image1 && <Image source={{ uri: image1 }} style={styles.ImgSytl} />}
                  {!!image2 && <Image source={{ uri: image2 }} style={styles.ImgSytl} />}
                  {!!image3 && <Image source={{ uri: image3 }} style={styles.ImgSytl} />}
                  {!!image4 && <Image source={{ uri: image4 }} style={styles.ImgSytl} />}
                </ScrollView>  
          </View>
          
          <Button 
            color={"#fa8072"} 
            title="Pick an image"  
            onPress={this.pickImg} 
            style={styles.buttonStyl} 
            />
  
  
          <Text style={styles.txtStyl}>For Additional Images:</Text>
          <ScrollView 
            horizontal={true} 
            style={styles.scrllvw} 
            showsHorizontalScrollIndicator={false}
            >
                  <MaterialIcons 
                    name="add-a-photo" 
                    size={40} 
                    color="darkred"  
                    onPress={this.pickImg2}  
                    style={styles.icn} 
                    />
                  {!!image2 &&  
                  <MaterialIcons 
                    name="add-a-photo" 
                    size={40} 
                    color="darkred"  
                    onPress={this.pickImg3}  
                    style={styles.icn} 
                    />}
                  {!!image3 &&
                  <MaterialIcons 
                    name="add-a-photo" 
                    size={40} 
                    color="darkred"  
                    onPress={this.pickImg4}  
                    style={styles.icn} 
                    />}
          </ScrollView>
  
          <ScrollView 
            vertical={true}
            showsVerticalScrollIndicator={false}
            >
              <TextInput 
                style={styles.TextInput} 
                placeholder='PRODUCT NAME' 
                placeholderTextColor='#c4332b'
                onChangeText={(productName) => this.setState({productName})}
                value={this.state.productName}
                />
              <Picker 
                mode="dropdown"
                selectedValue={this.state.list}
                style={{height:40, width: 340}}
                backgroundColor={'#e9967a'}
                style={styles.dropStyle}
                onValueChange={(itmVal) => {this.updateList(itmVal);}}
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
                onChangeText={(description) => this.setState({description})}
                value={this.state.description}
                />
              <TextInput 
                style={styles.TextInput} 
                placeholder='DONOR NAME' 
                placeholderTextColor='#c4332b'
                onChangeText={(donorName) => this.setState({donorName})}
                value={this.state.donorName}
                />
              <TextInput 
                style={styles.TextInput} 
                placeholder='PHONE NUMBER' 
                keyboardType='number-pad'
                placeholderTextColor='#c4332b'
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
                />
              <TextInput 
                style={styles.TextInput} 
                placeholder='AREA' 
                placeholderTextColor='#c4332b'
                onChangeText={(area) => this.setState({area})}
                value={this.state.area}
                />
              <TextInput 
                style={styles.TextInput} 
                placeholder='CITY' 
                placeholderTextColor='#c4332b'
                onChangeText={(city) => this.setState({city})}
                value={this.state.city}
                />        
              <Button 
                color={"#fa8072"} 
                title="SUBMIT"  
                style={styles.buttonStyl} 
                onPress={this.addData} 
                />
          </ScrollView>    
      </View>
    );
  }

  //picking image from thr library
  pickImg = async () => {
       let result1= await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
          });
    
        if (!result1.cancelled) 
        {
          const name= 'Image1';
          this._handleImage(result1,name);
        }
  };
     
  pickImg2= async () => {
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    if (!result2.cancelled) 
    {
      const name= 'Image2';
      this._handleImage(result2,name);
    }
  };

  pickImg3= async () => {
    let result3 = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [5, 4],
        quality: 1,
    });

    if (!result3.cancelled) 
    {
      const name= 'Image3';
      this._handleImage(result3,name);
    }
  };

  pickImg4= async () => {
    let result4 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
     });

     if (!result4.cancelled) 
     {
      const name= 'Image4';
       this._handleImage(result4,name);
     } 
  };

 //preparing image to store in firebase storage
 _handleImage=async (result1,name)=>{
  try{
    // const id= uuidGenerator();
    if(name == 'Image1')
    {
      const loadingUrl= await uploadImage(result1.uri,idNum,name);
      this.setState({image1: loadingUrl});
    }
   if(name == 'Image2')
    {
      const loadingUrl2= await uploadImage(result1.uri,idNum,name);
      this.setState({image2: loadingUrl2});
    }
    if(name == 'Image3')
    {
      const loadingUrl3= await uploadImage(result1.uri,idNum,name);
      this.setState({image3: loadingUrl3});
    }
    if(name == 'Image4')
    {
      const loadingUrl4= await uploadImage(result1.uri,idNum,name);
      this.setState({image4: loadingUrl4});
    }
    
  }
  catch(e)
  {
    console.log(e);
      alert('Opps uploading image failed :(');
  }
}

  //uploading data in the firestore
  addData= async () =>
  {
    const uid=firebase.auth().currentUser.uid;
    try{
      // const add=await adding(image1Url,productName,description,list,donorName,phone,area,city);
      const reference= firebase.firestore().collection("ads");
    
      if(this.state.image1 === null)
      {
        alert('Main Image is Mandatory');
        ToastAndroid.show('Main Image is Mandatory',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.productName === "")
      {
        alert('Missing field Product Name');
        ToastAndroid.show('Missing Field Product Name',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if((this.state.list === 'Select Category') && (this.state.list === ""))
      {
        alert('Category not Selected');
        ToastAndroid.show('Category not Selected',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.description === "")
      {
        alert('Missing field Description');
        ToastAndroid.show('Missing Field Description',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.donorName === "")
      {
        alert('Missing field Donor Name');
        ToastAndroid.show('Missing Field Donor Name',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.phone === "")
      {
        alert('Missing field Phone Number');
        ToastAndroid.show('Missing Field Phone Number',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.area === "")
      {
        alert('Missing field Area');
        ToastAndroid.show('Missing Field Area',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if(this.state.city === "")
      {
        alert('Missing field City');
        ToastAndroid.show('Missing Field City',ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
      else if((this.state.image1 !== null) && (this.state.productName !== "") && (this.state.description !== "") 
        && ((this.state.list !== 'Select Category') && (this.state.list !== ""))
          && (this.state.donorName !== "") && (this.state.phone !== "")
            && (this.state.area !== "") && (this.state.city !== "") )
      {
        await reference.add({
          UserId: uid,
          Image1: this.state.image1,
          Image2: this.state.image2,
          Image3: this.state.image3,
          Image4: this.state.image4,
          ProductName: this.state.productName,
          Category: this.state.list,
          Description: this.state.description,
          DonorName: this.state.donorName,
          Phone: this.state.phone,
          Area: this.state.area,
          City: this.state.city,
        });
  
        // await store.putFile(result1.uri);
        alert("Thank you for Posting Ad");
        ToastAndroid.show('Successful',ToastAndroid.LONG, ToastAndroid.BOTTOM);
  
          this.setState({productName: ""});
          this.setState({list: ""});
          this.setState({description: ""});
          this.setState({donorName: ""});
          this.setState({phone: ""});
          this.setState({area: ""});
          this.setState({city: ""});
          this.setState({image1: null});
          this.setState({image2: null});
          this.setState({image3: null});
          this.setState({image4: null});
      }
    }
    catch(e)
    {
      console.log(e);
      alert('Network connection failed :(');
    }
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
      .ref("itemss/"+ id)
      .child(name);
    
    const snapshot= await ref.put(blob);

    blob.close();

    return await snapshot.ref.getDownloadURL();
}

  function uuidGenerator()
  {
    return 'xyxyxyxxxxyyyxxy'.replace(/[xy]/g, function(c){
      var a= Math.random() * 16 | 0,v = c == 'x' ? a: (a & 0x3|0x8);
      return v.toString(16);
    });
  }

const styles= StyleSheet.create({
    dropStyle:
    {
        color:'darkred',
        borderRadius: 30,
        paddingTop:10,
        marginTop:5,
        backgroundColor: '#e9967a',
        
    },
    PickStyle:
    {
      color: 'darkred',
    },
    TextInput:
    {
        width:350,
        marginTop:10,
        marginBottom:5,
        height:40,
        backgroundColor:'#e9967a',
        opacity:0.8,
        borderRadius:10,
        paddingHorizontal:10,
        paddingTop:10,
        color: 'darkred',
    },
    viewer:
    { 
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
        paddingTop:10, 
        paddingVertical: 5,
        alignItems: 'flex-start',
        backgroundColor: '#fffaf0',
        height: '100%',
    },
    viewer2:
    { 
      flex:1,
      alignItems: 'stretch',
      // padding:8,
      // margin: 8,
    },
    ImgSytl:
    {
        height: 150,
        width: 150,
        marginRight:8,
        paddingBottom:5,
    },
    buttonStyl:
    {
        // paddingTop:10,
        // marginTop: 10,
        // marginBottom: 15,
        // borderRadius:15,
        flex:2,
    },
    icn:
    {
      marginTop: 5,
      paddingVertical:20,
      marginLeft:10,
    },
    scrllvw:
    {
      paddingHorizontal: 10,
    },
    txtStyl:
    {
      color:'darkred',
      fontWeight:'bold',
      fontSize: 20,
      paddingTop:5,
      marginTop:5,
    }
});