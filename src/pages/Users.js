import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView,FlatList,Image,TouchableOpacity} from "react-native";
import {Avatar} from 'react-native-paper';
import * as firebase from "firebase";

export class Users extends Component
{
  state={
    users: []
  };

  constructor(props)
  {
    super(props);
    this.subscriber= firebase.firestore()
                              .collection('userData')
                              .onSnapshot(docs => {
                                let users=[];
                                docs.forEach(doc => {
                                  const {FirstName, LastName}=doc.data();
                                  users.push({
                                    id: doc.id, 
                                    FirstName, 
                                    LastName,
                                  });
                                });
                                this.setState({users});
                                console.log(users);
                              });
  }
  render()
  {
    return(
      // <View>
      //   {this.state.users.map((user,id)=>
      //       <View key={id}>
      //         <Text>{user.Email}</Text>
      //         <Text>{user.Feedback}</Text>
      //       </View> )}
      //   </View>
      <View style={StyleSheet.container}>
        

        <FlatList
          style={styles.container}
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDetail',{id: item.id})}>
              <View style={styles.Vstyle}>
                {/* <Image source={{uri: item.Image1}} style={{width: 100,height:100}}/> */}
                <Avatar.Image 
                    source={require('../images/profile.png')}
                    size={50}
                    backgroundColor={'#a9a9a9'}
                    />
                <View style={styles.VInstyle}>
                  <Text style={styles.Fstyle}>{item.FirstName} {item.LastName}</Text>
                  {/* <Text style={styles.Estyle}>{item.LastName}</Text> */}
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
    backgroundColor: 'white',
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
    marginTop: 8,
  },
});

export default Users;