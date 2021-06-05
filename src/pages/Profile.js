import React, {useState, useEffect} from "react";
import { ScrollView, StyleSheet, Pressable, View, SafeAreaView,TouchableOpacity,Button, ToastAndroid } from 'react-native';
import {Avatar,Title, Caption,TouchableRipple,Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from "firebase";


const Profile = ({route,navigation}) => { 
{
    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [B,setB] =useState(false);
    const [countD,setCountD]= useState(0);
    const [countR,setCountR]= useState(0);
    const user= firebase.auth().currentUser.uid;

    const getUser = async() => 
    {
      try
      {
        await
        firebase 
          .firestore()
          .collection('userData')
          .doc( user)
          .get()
          .then((documentSnapshot) => {
            if( documentSnapshot.exists ) 
            {
              console.log('User Data', documentSnapshot.data());
              setdata(documentSnapshot.data());
            }
          })

          await firebase.firestore()
                        .collection('ads')
                        .where('UserId', '==', user)
                        .get()
                        .then((doc) =>{
                          setCountD(doc.size);
                        });
          
          await firebase.firestore()
                        .collection('requests')
                        .doc(user)
                        .collection('myRequest')
                        .get()
                        .then((doc) =>{
                          setCountR(doc.size);
                        });

        if(user == 'ydvD4MMj15cg3wTzh5wcPt1gtLy2')
        {
          setB(true);
        }
      }
      catch(e)
      {
        // alert('No Data Available');
        ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
      }
    }
  
    useEffect(() => {
      getUser();
      navigation.addListener("focus", () => setLoading(!loading))
    }, [navigation,loading]);
 
    return (
      
   <SafeAreaView style={styles.container}>
    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15 }}>
        <Avatar.Image 
            source={require('../images/profile.png')}
            size={80}
            backgroundColor={'#a9a9a9'}
        />
       
        <View style={{marginLeft: 20}}>
          <Title style={styles.title} >{data ? data.FirstName || 'User' : 'User'} {data ? data.LastName || 'Name' : 'Name'}</Title>
          
          <TouchableOpacity 
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
            >
              <Icon name="account-edit" color="white" size={20}/>
              <Text style={{color:'white',fontSize: 20}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
        
    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" size={20} color="#808080" />
        <Text style={{ marginLeft:20,color: "#800000"}}>{data ? data.City || 'City Name' : 'City Name'} </Text>
      </View>

      <View style={styles.row}>
        <Icon name="phone"  size={20} color="#808080" />
        <Text style={{ marginLeft:20, color: "#800000"}}>{data ? data.PhoneNumber || '+92---------' : '+92---------'}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="email"  size={20} color="#808080" />
        <Text style={{ marginLeft:20, color: "#800000"}}>{data ? data.Email || 'Email' : 'Email'}</Text>
      </View>

      {B &&<TouchableOpacity 
        style={styles.AdminButton} 
        onPress={()=> navigation.navigate('AdminStack')}>
        <Icon name="account-tie" color='white' size={15} />
        <Text style={styles.AdminText} >Admin DashBoard</Text>
      </TouchableOpacity>}
    </View>
    <View style={styles.infoBoxWrapper}>
      <View style={styles.infoBox}>
        <Title
            style={styles.menuItemText}
            onPress={()=> this.props.navigation.navigate('MyRequest')}
            >{countR}</Title>
        <Caption 
            style={{color: 'darkred'}}
            onPress={()=> this.props.navigation.navigate('MyRequest')}
            >Total Requests Made</Caption>
      </View>
      <View style={styles.infoBox}>
        <Title
            style={styles.menuItemText}
            onPress={()=> this.props.navigation.navigate('myAds')}>{countD}</Title>
        <Caption 
            style={{color:'darkred'}}
            onPress={()=> this.props.navigation.navigate('myAds')}
            >Total Donated Objects</Caption>
      </View>
    </View>
    <View style={styles.menuWrapper}> 
    <TouchableRipple onPress={() => navigation.navigate('Favorites')}>
        <View style={styles.menuItem}>
          <Icon 
            name= "account-heart-outline" 
            color="red" 
            size={25} 
            // onPress={()=> this.props.navigation.navigate('favorites')}
            />
          <Text 
            style={styles.menuItemText}
            // onPress={()=> this.props.navigation.navigate('favorites')}
            >My Favorites</Text>
        </View>
    </TouchableRipple>
    <TouchableRipple onPress={() => navigation.navigate('MyAds')}>
        <View style={styles.menuItem}>
          <Icon name= "account-plus-outline" color="red" size={25} />
          <Text style={styles.menuItemText}>My Ads</Text>
        </View>
    </TouchableRipple>
    
    <TouchableRipple onPress={() => navigation.navigate('MyRequest')}>
        <View style={styles.menuItem}>
          <Icon 
            name= "account-star-outline" 
            color="red" 
            size={25} 
            // onPress={()=> this.props.navigation.navigate('MyRequest')}
            />
          <Text 
            style={styles.menuItemText}
            // onPress={()=> this.props.navigation.navigate('MyRequest')}
            >My Requests</Text>
        </View>
    </TouchableRipple>


     
    </View>
    </SafeAreaView>
    );
    }
  }

  const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor: 'white',
    },
    userInfoSection:
    {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title:
    {
      fontSize:30,
      fontWeight:'bold',
      color: 'darkred',
      marginTop: 10,
      marginBottom: 5,
    },
    caption:
    {
      fontSize: 14,
      lineHeight:14,
      fontWeight: '500',
    },
    row:{
      flexDirection:'row',
      marginBottom:10,
    },
    infoBoxWrapper:
    {
      borderBottomColor: '#ad251d',
      borderBottomWidth: 2,
      borderTopColor: '#ad251d',
      borderTopWidth:2,
      flexDirection:'row',
      height: 100,
    },
    infoBox: 
    {
      width: ' 50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: 
    {
      marginTop: 10,
    },
    menuItemText:
    {
      color: '#fa8072',
      marginLeft:20,
      fontWeight: 'bold',
      fontSize:20,
      lineHeight: 26,
    },
    menuItem:
    {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },

    editProfileButton:
    {
      width:140,
      // height:15,
      backgroundColor:'#ad251d',
      opacity:1,
      borderRadius:30,
      alignItems:'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    AdminButton:
    {
      backgroundColor: '#fa8072',
      width: 190,
      alignItems: 'center',
      borderRadius: 25,
      padding: 3,
      flexDirection:'row',
      justifyContent: 'space-evenly',
    },
    AdminText:
    {
      color: 'white',
      fontSize: 20,
    }
  });

  export default Profile;