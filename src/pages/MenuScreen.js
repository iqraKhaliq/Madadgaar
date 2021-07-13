import React,{Component,useEffect,useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, Image, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
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
      <View style={styles.main}>
        <SafeAreaView>
          <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
            >
          <View style={style.main2}>
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

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MyRequest')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/request.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>My Requests</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MyAds')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/ads.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>My Ads</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Favorites')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/fav.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>My Favorites</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Suggestion')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/suggestion.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>Feedback</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Contact')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/contact.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>Contact Us</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Help')}
              >
              <View style={styles.inner}>
                <Avatar.Image
                  source={require('../icons/help.png')}
                  size={40}
                  backgroundColor={'#fff'} 
                  />
                <Text style={styles.txtStyl}>Help</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.Vsignout}>
              <TouchableOpacity
                style={styles.signout}
                onPress={signout}
                >
                <View style={styles.inner}>
                  <Text style={styles.txtSignout}>Sign Out</Text>
                  <Avatar.Image
                    source={require('../icons/logout.png')}
                    size={40}
                    />
                </View>
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
  main:
  { 
    flex: 1,
    backgroundColor: '#ffe4e1',
    height: '100%', 
    alignContent: 'flex-start',
  },
  main2:
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginLeft: 10,
  },
  head:
  {
    marginTop: 5,
    marginLeft: 8,
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
    minWidth: 280,
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
    marginTop:'80%',
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
    borderRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
  },
  txtSignout:
  {
    color:'white',
    fontWeight:'bold',
    fontSize: 25,
    marginRight: '45%',
  },
  inner:
  {
    flexDirection:'row',
    alignItems: 'center',
  }
});

export default MenuScreen;