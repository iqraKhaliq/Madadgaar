import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView,FlatList,Image,TouchableOpacity} from "react-native";
import * as firebase from "firebase";
import Form  from '../components/GetLocation';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export class MainPage extends Component
{
  state={
    users: []
  };

  constructor(props)
  {
    super(props);
    this.subscriber= firebase.firestore()
                              .collection('ads')
                              .onSnapshot(docs => {
                                let users=[];
                                docs.forEach(doc => {
                                  const {Image1,ProductName,Description}=doc.data();
                                  users.push({
                                    id: doc.id, 
                                    Image1,
                                    ProductName,
                                    Description,
                                  });
                                });
                                this.setState({users});
                                console.log(users);
                              });
  }
  render()
  {
    return(
      <View style={StyleSheet.container}>
        <View style={styles.Gstyle}>
            <Text 
                style={styles.Txtlocation}
                >
                <MaterialCommunityIcons 
                    name="google-maps" 
                    size={35} 
                    color='darkred' 
                    /> 
                    <Form type="GetLocation" /> 
            </Text>
        </View>

        <FlatList
          style={styles.container}
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDisplay',{id: item.id})}>
              <View style={styles.Vstyle}>
                <Image source={{uri: item.Image1}} style={{width: 100,height:100}}/>
                <View style={styles.VInstyle}>
                  <Text style={styles.Fstyle}>{item.ProductName}</Text>
                  <Text style={styles.Estyle}>{item.Description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:
  {
    backgroundColor: '#fffaf0',
    padding:10,
    flexDirection:'column',
    marginBottom:10,
    // margin:10,
  },
  Vstyle:
  {
    backgroundColor: 'darksalmon',
    padding:5,
    margin:5,
    flexDirection:'row',
  },
  VInstyle:
  {
    backgroundColor: 'darksalmon',
    flexDirection:'column',
    paddingLeft:8,
  },
  Estyle:
  {
    fontSize: 20,
    color: 'maroon',
    // padding: 10,
    margin:5,
  },
  Fstyle:
  {
    fontSize: 30,
    color: 'maroon',
    // padding: 10,
    margin:5,
  },
  Txtlocation:
  {
    justifyContent: 'flex-start',
  },
  Gstyle:
  {
      backgroundColor: '#fffaf0',
      padding: 5,
      paddingLeft: 10,
    //   margin: 2,
  },
});

export default MainPage;

// <View>
      //   {this.state.users.map((user,id)=>
      //       <View key={id}>
      //         <Text>{user.Email}</Text>
      //         <Text>{user.Feedback}</Text>
      //       </View> )}
      //   </View>