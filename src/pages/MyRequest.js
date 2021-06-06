import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView,FlatList,Image,TouchableOpacity} from "react-native";
import * as firebase from "firebase";

export class MyRequest extends Component
{
  state={
    users: [],
    show: false,
  };

  constructor(props)
  {
    super(props);
    const uid=firebase.auth().currentUser.uid;

    this.subscriber= firebase.firestore()
                              .collection('requests')
                              .doc(uid)
                              .collection('myRequest')
                              .get()
                              .then(doc => {
                                let users=[];
                                doc.forEach(docs => {
                                  if(docs.exists)
                                  {
                                    const {Image1,ProductName,Description}=docs.data();
                                    // console.log(doc.data());
                                    users.push({
                                      id: docs.id,
                                      Image1,
                                      ProductName,
                                      Description,
                                    });
                                    this.setState({show: true});
                                  }
                                });
                                this.setState({users});
                                console.log(users);
                              });

  }

  render()
  {
    return(
      <View style={StyleSheet.container}>
        {this.state.show == false && 
            <Text style={styles.Nodisplay}>Sorry :( Nothing to Display</Text>}

        <FlatList
          style={styles.container}
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('myRequestDisplay',{id: item.id})}>
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
  },
  Nodisplay:
  {
    alignItems: 'center',
    alignContent: 'center',
    color: 'maroon',
    fontSize: 30,
    fontWeight: '500',
    backgroundColor: 'white',
    paddingTop: '70%',
    paddingLeft: '15%',
    // margin: 50,
    height: '100%',
  },
});

export default MyRequest;