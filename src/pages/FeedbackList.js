import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView,FlatList} from "react-native";
import * as firebase from "firebase";

export class FeedbackList extends Component
{
  state={
    users: []
  };

  constructor(props)
  {
    super(props);
    this.subscriber= firebase.firestore()
                              .collection('suggestion')
                              .onSnapshot(docs => {
                                let users=[];
                                docs.forEach(doc => {
                                  users.push(doc.data());
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
          renderItem={({item}) => (
            <View style={styles.Vstyle}>
              <Text style={styles.Estyle}>{item.Email}</Text>
              <Text style={styles.Fstyle}>{item.Feedback}</Text>
            </View>
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
  },
  Vstyle:
  {
    backgroundColor: 'peachpuff',
    padding:5,
    margin:5,
  },
  Estyle:
  {
    fontSize: 20,
    color: 'maroon',
    fontWeight: 'bold',
  },
  Fstyle:
  {
    fontSize: 15,
    color: 'red',
    fontWeight: '700',
  },
});

export default FeedbackList;

