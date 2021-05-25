import React from "react";
import { ScrollView, StyleSheet, Pressable, View, SafeAreaView,TouchableOpacity,Button } from 'react-native';
import {Avatar,Title, Caption,Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Profile extends React.Component 
{
  render() 
  {
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
          <Title style={styles.title , {marginTop: 15,marginBottom: 5}} >Shaheera Khalid</Title>
          
          <TouchableOpacity style={styles.editProfileButton}>
                <Text style={{color:'white'}} 
                    onPress={() => this.props.navigation.navigate('EditProfile')}>Edit Profile</Text>
              </TouchableOpacity>
        </View>
        
      </View>
    </View>
        
    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="map-marker-radius" size={20} />
        <Text style={{ marginLeft:20}}>Lahore, Pakistan</Text>
      </View>

      <View style={styles.row}>
        <Icon name="phone"  size={20} />
        <Text style={{ marginLeft:20}}>+92 321 7408630</Text>
      </View>

      <View style={styles.row}>
        <Icon name="email"  size={20} />
        <Text style={{ marginLeft:20}}>shaheera@gmail.com</Text>
      </View>

    </View>
    <View style={styles.infoBoxWrapper}>
      <View style={styles.infoBox}>
        <Title
            onPress={()=> this.props.navigation.navigate('MyRequest')}
            >2</Title>
        <Caption 
            style={{color: 'black'}}
            onPress={()=> this.props.navigation.navigate('MyRequest')}
            >Total Requests Made</Caption>
      </View>
      <View style={styles.infoBox}>
        <Title
            onPress={()=> this.props.navigation.navigate('MyAds')}>2</Title>
        <Caption 
            style={{color:'black'}}
            onPress={()=> this.props.navigation.navigate('MyAds')}
            >Total Donated Objects</Caption>
      </View>
    </View>
    <View style={styles.menuWrapper}> 
    <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon 
            name= "heart-outline" 
            color="#FF6347" 
            size={25} 
            onPress={()=> this.props.navigation.navigate('Favorites')}
            />
          <Text 
            style={styles.menuItemText}
            onPress={()=> this.props.navigation.navigate('Favorites')}
            >My Favorites</Text>
        </View>
    </TouchableRipple>
    <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name= "share-outline" color="#FF6347" size={25} />
          <Text style={styles.menuItemText}>Tell Your Friends</Text>
        </View>
    </TouchableRipple>
    
    <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon 
            name= "account-check-outline" 
            color="#FF6347" 
            size={25} 
            onPress={()=> this.props.navigation.navigate('Help')}
            />
          <Text 
            style={styles.menuItemText}
            onPress={()=> this.props.navigation.navigate('Help')}
            >Help and Support</Text>
        </View>
    </TouchableRipple>


    <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name= "account-outline" color="#FF6347" size={25} />
          <Text style={styles.menuItemText}>Settings</Text>
        </View>
    </TouchableRipple>    
    </View>
    </SafeAreaView>
    );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    
    userInfoSection:{
      paddingHorizontal: 30,
      marginBottom: 25,
      
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
    },
    caption:{
      fontSize: 14,
      lineHeight:14,
      fontWeight: '500',
    },
    row:{
      flexDirection:'row',
      marginBottom:10,
    },
    infoBoxWrapper:{
      borderBottomColor: '#ad251d',
      borderBottomWidth: 2,
      borderTopColor: '#ad251d',
      borderTopWidth:2,
      flexDirection:'row',
      height: 100,
    },
    infoBox: {
      width: ' 50%',
      alignItems: 'center',
      justifyContent: 'center',

    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItemText:{
      color: 'black',
      marginLeft:20,
      fontWeight: '600',
      fontSize:20,
      lineHeight: 26,
    },
    menuItem:{
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },

    editProfileButton:{
      width:100,
      height:30,
      backgroundColor:'#ad251d',
      opacity:1,
      borderRadius:25,
      alignItems:'center',
      justifyContent: 'center',
      
    },
  });

  export default Profile;