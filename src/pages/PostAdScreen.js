import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, Button} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/PostAdForm';

const HomeScreen = ({ route, navigation }) => {
return (
  <ScrollView
    vertical={true}
    showsVerticalScrollIndicator={false}
    >
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.main}>
            <Form type="PostAdForm"/>
        </View>
     </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main:
  {
    flex:1,
    alignItems: 'baseline',
    justifyContent: 'center',
    // padding: 5,
    // margin: 5,
    backgroundColor: '#ffe4e1',
    padding:10,
    margin: 10,
    height:'100%',
  },
  button: 
  {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  txtStyl:
  {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:5,
    fontStyle: 'italic'
  },
  container: 
  {
    alignItems: 'baseline',
    flex: 1,
    backgroundColor: '#ffefd5',
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding: 20,
  },
});



export default HomeScreen;