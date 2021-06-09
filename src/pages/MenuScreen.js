import React,{Component,useEffect,useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, Image, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
              // flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            
          <View style={styles.Vstyle} >
            <View>
              <Image
                source={{uri: data? data.ProfileImage || '../profiles/teenager.png': '../profiles/teenager.png'}}
                style={{height: 150,width: 150,borderRadius: 1000}}
                />
            </View>

            <View style={styles.head}>
              <Text 
                style={styles.VTstyle}
                >Welcome {data ? data.FirstName || 'User' : 'User'} {data ? data.LastName || 'Name' : 'Name'}</Text>
              </View>
          </View>

          {/* <TouchableOpacity
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
            </TouchableOpacity> */}
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MyRequest')}
              >
              {/* <Icon name="account-edit" color="white" size={20}/> */}
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
              onPress={() => navigation.navigate('FAQ')}
              >
              <Text style={styles.txtStyl}>FAQ's</Text>
            </TouchableOpacity>

            <View style={styles.Vsignout}>
              <TouchableOpacity
                style={styles.signout}
                onPress={signout}
                >
                <Text style={styles.txtSignout}>Sign Out</Text>
              </TouchableOpacity>
            </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
  );

  async function signout()
  {
    firebase.auth().signOut().then(() =>
    {
      ToastAndroid.show('Signing Out',ToastAndroid.LONG,ToastAndroid.BOTTOM);
      navigation.navigate('Signin');
    }).catch((e) =>
    {
      ToastAndroid.show('Signing Out Failed',ToastAndroid.LONG,ToastAndroid.BOTTOM);
    })
  }
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
    marginTop: 5,
  },
  txtStyl:
  {
    color:'darkred',
    fontWeight:'bold',
    fontSize: 25,
  },
  head:
  {
    marginTop: 5,
    paddingTop: 5,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Vstyle:
  {
    height: 250,
    justifyContent: 'center',
    backgroundColor: '#fa8070',
    minWidth:280,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  VTstyle:
  {
    fontSize: 30,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  Vsignout:
  {
    marginTop:'98%',
    padding:5,
    justifyContent: 'flex-end',
    backgroundColor: '#fa8070',
    flex:1,
    minWidth:280,
    borderColor: 'white',
    flexDirection: 'column-reverse',
  },
  signout:
  {
    // alignItems: 'flex-end',
    backgroundColor: '#fa8070',
    paddingLeft: 20,
    width: 300,
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: 25,
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