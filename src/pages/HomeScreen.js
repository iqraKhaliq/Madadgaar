import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Logo from '../components/Logo';

const HomeScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <Logo/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeStack', { screen: 'Signin' })}
            >
            <Text style={styles.txtStyl}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
            >
            <Text style={styles.txtStyl}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#e9967a',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius:10,
  },
  txtStyl:
  {
    color:'darkred',
    fontWeight:'bold',
    fontSize: 15,
  },
});
export default HomeScreen;