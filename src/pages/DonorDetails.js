import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import * as firebase from "firebase";
import { ListItem } from 'react-native-elements';

export class DonorDetails extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('suggestion');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Email,Feedback } = res.data();
      console.log(res.data());
      userArr.push({
        key: res.id,
        res,
        Email: res.data().Email,
        Feedback: res.data().Feedback,
    });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
   console.log('users '+ this.state.userArr);

  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
          <Text>Loading</Text>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.Email}
                  subtitle={item.Feedback}
                  onPress={this.display}
                />
              );
            })
          }
      </ScrollView>
    );
  }
  display=() =>
  {
      alert('hi there');
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default DonorDetails;