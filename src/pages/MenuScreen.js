import React,{Component} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView,ScrollView} from 'react-native';
import Logo from '../components/Logo';

export function MenuScreen({navigation})
{
  return (
      <View style={{ flex: 1, padding: 10 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
            >
        
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
          <Logo/>

          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('details')}
              >
              <Text style={styles.txtStyl}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('test')}
              >
              <Text style={styles.txtStyl}>test</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Main')}
              >
              <Text style={styles.txtStyl}>Ads</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Categories')}
              >
              <Text style={styles.txtStyl}>Categories</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Users')}
              >
              <Text style={styles.txtStyl}>Users List</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Profile')}
              >
              <Text style={styles.txtStyl}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EditProfile')}
              >
              <Text style={styles.txtStyl}>Edit Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Suggestion')}
              >
              <Text style={styles.txtStyl}>Suggestion & Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.txtStyl}>Contact Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Help')}>
              <Text style={styles.txtStyl}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MyRequest')}
              >
              <Text style={styles.txtStyl}>My Requests</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MyAds')}
              >
              <Text style={styles.txtStyl}>My Ads</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Favorites')}
              >
              <Text style={styles.txtStyl}>My Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}
              >
              <Text style={styles.txtStyl}>Go to Home Tab</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signin')}
              >
              <Text style={styles.txtStyl}>Sign In</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}
              >
              <Text style={styles.txtStyl}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FeedbackList')}
              >
              <Text style={styles.txtStyl}>Feedback List</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FAQ')}
              >
              <Text style={styles.txtStyl}>FAQ's</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create
({
  button: 
  {
    alignItems: 'center',
    backgroundColor: '#e9967a',
    padding: 10,
    width: 300,
    margin: 5,
    borderRadius:10,
  },
  txtStyl:
  {
    color:'darkred',
    fontWeight:'bold',
    fontSize: 15,
  },
});

export default MenuScreen;