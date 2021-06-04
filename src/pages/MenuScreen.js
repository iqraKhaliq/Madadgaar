import React,{Component,useEffect,useState} from 'react';
import {TouchableOpacity,StyleSheet,View,Text,SafeAreaView,ScrollView, ImageBackground} from 'react-native';
import Logo from '../components/Logo';
import * as firebase from "firebase";

export function MenuScreen({navigation})
{
  const [data,setData]= useState(null);
  const [loading, setLoading] = useState(true);

  const uid= firebase.auth().currentUser.uid;

  const getUser= async()=>{
    try
      {
        await
        firebase 
          .firestore()
          .collection('userData')
          .doc(uid)
          .get()
          .then((documentSnapshot) => {
            if( documentSnapshot.exists ) 
            {
              console.log('User Data', documentSnapshot.data());
              setData(documentSnapshot.data());
            }
          })
      }
      catch(e)
      {
        alert('No Data Available');
      }
  }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading))
  }, [navigation,loading]);

  return (
      <View style={{ flex: 1,backgroundColor: '#ffe4e1',height: '100%', alignContent: 'flex-start' }}>
        <SafeAreaView>
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
            
          <View style={styles.Vstyle} >
            <Text style={styles.VTstyle}>Welcome {data ? data.FirstName || 'User' : 'User'} {data ? data.LastName || 'Name' : 'Name'}</Text>
          </View>

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
            
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
            
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

            {/* <TouchableOpacity
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
            </TouchableOpacity> */}

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

            <View style={styles.Vsignout}>
              <TouchableOpacity
                style={styles.signout}
                onPress={() => alert('signing out ...')}
                >
                <Text style={styles.txtSignout}>Sign Out</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: 'baseline',
    backgroundColor: '#e9967a',
    paddingLeft: 20,
    width: 300,
    margin: 2,
    marginLeft: 5,
    borderRadius:10,
  },
  txtStyl:
  {
    color:'darkred',
    fontWeight:'bold',
    fontSize: 25,
  },
  Vstyle:
  {
    height: 150,
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'maroon',
    flex:1,
    minWidth:280,
  },
  VTstyle:
  {
    alignItems:'baseline',
    justifyContent: 'space-around',
    fontSize: 25,
    color: 'white',
    padding:5,
    paddingLeft:10,
  },
  Vsignout:
  {
    // height: 150,
    marginTop:15,
    padding:5,
    justifyContent: 'flex-end',
    backgroundColor: 'maroon',
    flex:1,
    minWidth:280,
    borderColor: 'white',
    flexDirection: 'column-reverse',
  },
  signout:
  {
    // alignItems: 'flex-end',
    backgroundColor: 'maroon',
    paddingLeft: 20,
    width: 300,
    margin: 2,
    marginLeft: 5,
    borderRadius:10,
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
  },
  txtSignout:
  {
    color:'white',
    fontWeight:'bold',
    fontSize: 25,
  }
});

export default MenuScreen;