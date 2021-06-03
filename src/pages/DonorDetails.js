import React,{Component,useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, ScrollView,FlatList,Image} from "react-native";
import * as firebase from "firebase";

export class DonorDetails extends Component
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
              <Image source={{uri: item.Image1}} style={{width: 100,height:100}}/>
              <View style={styles.VInstyle}>
                <Text style={styles.Fstyle}>{item.ProductName}</Text>
                <Text style={styles.Estyle}>{item.Description}</Text>
              </View>

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
    flexDirection:'column',
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
});

// const DonorDetails=({route,navigation}) => 
// {
//   // const reference = firebase.firestore().collection('suggestion');

//   const[userArr,setUserArr]= useState([]);
//   const[isLoading,setIsLoading]= useState(true); 

//   const getCollection = async() => 
//   {
//       try
//       {
//         const list=[];

//         await
//         firebase 
//           .firestore()
//           .collection('suggestion')
//           .get()
//           .then((documentSnapshot) => {
//             documentSnapshot.docs.map((doc) =>{
//               const {Email,Feedback}=doc.data();
//               console.log(doc.data());
            
//             list.push({
//               id: doc.id,
//               Email,
//               Feedback,
//             });
//           });
//         });
//           setUserArr(list);
//           console.log(userArr);
        
//       }
//       catch(e)
//       {
//         alert('No Data Available');
//       }
//     }

//     useEffect(() => {
//       getCollection();
//       navigation.addListener("focus", () => setIsLoading(!isLoading))
//     }, [navigation,isLoading]);
 
//   // getCollection = (querySnapshot) => {
//   //   const userArr = [];
//   //   querySnapshot.forEach((res) => {
//   //     const { Email,Feedback } = res.data();
//   //     console.log(res.data());
//   //     userArr.push({
//   //       key: res.id,
//   //       res,
//   //       Email: res.data().Email,
//   //       Feedback: res.data().Feedback,
//   //   });
//   //   });
//   //   this.setState({
//   //     userArr,
//   //     isLoading: false,
//   //  });
//   //  console.log('users '+ this.state.userArr);

//   // }

//   // render() {
//   //   if(this.state.isLoading){
//   //     return(
//   //       <View style={styles.preloader}>
//   //         <ActivityIndicator size="large" color="#9E9E9E"/>
//   //         <Text>Loading</Text>
//   //       </View>
//   //     )
//   //   }    
//     return (
//       <ScrollView style={styles.container}>
//           {
//             userArr.map((item) => {
//               return (
//                 <ListItem
//                   key={item.id}
//                   chevron
//                   bottomDivider
//                   title={item.Email}
//                   subtitle={item.Feedback}
//                   // onPress={display()}
//                 />
//               );
//             })
//           }
//       </ScrollView>
//     );
//   }
//   // display=() =>
//   // {
//   //     alert('hi there');
//   // }
// // }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingBottom: 22
//   },
//   preloader: {
//     left: 10,
//     right: 10,
//     top: 10,
//     bottom: 10,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

export default DonorDetails;