import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import * as firebase from "firebase";
// import firebase from '../database/firebaseDb';
import { ListItem } from 'react-native-elements';

export class DDetails extends Component {

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
      userArr.push({
        key: res.id,
        res,
        Email,
        Feedback,
    });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
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
                //   onPress={() => {
                //     this.props.navigation.navigate('UserDetailScreen', {
                //       userkey: item.key
                //     });
                //   }}
                />
              );
            })
          }
      </ScrollView>
    );
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

export default DDetails;
// export class DDetails extends React.Component
// {
    
//     state={
//         list:[],
//     };


//     constructor(props)
//     {
//         const reference= firebase.firestore();
//         super(props);

//         const dataa= async() =>{
//             const list=[];
//             const snapShot= await reference
//                 .collection("ads")
//                 .doc('4CDshJmw8427YwdkvSte')
//                 .get()
//                 .then((snap)=>
                 
//                     // console.log(snap.data())

//                     list.push({
//                         Phone: snap.data().Phone
//                     })
//                 );
//                 this.setState({list});
//         }
//     }
                        

//     render()
//     {
//         return(
//             <View>
//                 <Text>this is me {this.state.list}</Text>
//             </View>
//         );
//     }
// }

// export default DDetails; 