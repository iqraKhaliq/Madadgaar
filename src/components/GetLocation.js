import React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

//api key
let apiKey='https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAEIosz7Z4HYEaWUsCQZ4NI93Jpfgq0x5I';
// let apiKey= 'https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters';
// AIzaSyAEIosz7Z4HYEaWUsCQZ4NI93Jpfgq0x5I
// AIzaSyD5noIYrCJhvuVtNmRDM6RQn3DGYaN7KJ4

import * as Location from 'expo-location';

export default function GetLocation() 
{
  const[location, setLocation]= useState(null);
  const[errorMsg, setErrorMsg]= useState(null);
  const[address, setAddress]= useState(null);
  const[getLocation, setGetLocation]= useState(false);

  useEffect(()=> {
    (async ()=> {
      let {status}= await Location.requestPermissionsAsync();

      if(status !== 'granted')
      {
        setErrorMsg('Permission not granted to access current location.');
      }

      Location.setGoogleApiKey(apiKey);
      console.log(status);

      let {coords}= await Location.getCurrentPositionAsync();
      setLocation(coords);

      if(coords)
      {
        let {longitude, latitude}= coords;

        let rgnName= await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(rgnName[0]);
      }

    })();
  },[getLocation]);

    var st= JSON.stringify(address?.street);
    var dt= JSON.stringify(address?.district);
    var ct= JSON.stringify(address?.city);
    var ctr= JSON.stringify(address?.country);

    if(!!st)
    {
      st=st.replace(/"/g,"");
    }
    if(!!dt)
    {
      dt=dt.replace(/"/g,"");
    }
    if(!!ct)
    {
      ct=ct.replace(/"/g,"");
    }
    if(!!ctr)
    {
      ctr=ctr.replace(/"/g,"");
    }

  return(
    <View>
      <Text style={styling.txt} onPress={()=> setGetLocation(!getLocation)}> {st} {dt}, {ct}. </Text>
    </View>
  );
}

const styling= StyleSheet.create({
  txt:
  {
    fontSize:22,
    color: 'darkred',
    // fontStyle:'italic',
    fontWeight: 'bold',
    paddingLeft:5,
    marginLeft:5,
  },
});
