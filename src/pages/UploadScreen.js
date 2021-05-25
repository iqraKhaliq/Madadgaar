import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Logo from '../components/Logo';
const UploadScreen = () => {
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

        </View>
  
      </View>
    </SafeAreaView>
  );
}
export default UploadScreen;