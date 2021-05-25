import 'react-native-gesture-handler';

import * as React from 'react';

if(!firebase.apps.length)
{
  firebase.initializeApp( firebaseConfig ) ;
}

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/SigninScreen';
import MenuScreen from './src/pages/MenuScreen';
import SigninScreen from './src/pages/SigninScreen';
import SignupScreen from './src/pages/SignupScreen';
import SuggestionScreen from './src/pages/SuggestionScreen';
import PostAdScreen from './src/pages/PostAdScreen';
import ContactPage from './src/pages/ContactPage';
import HelpPage from './src/pages/HelpPage';
import FAQpage from './src/pages/FAQpage';
import MainPage from './src/pages/MainPage';
import Profile from './src/pages/Profile';
import Categories from './src/pages/Categories';
import ItemDisplay from './src/pages/ItemDisplay';
import FeedbackList from './src/pages/FeedbackList';
import Users from './src/pages/Users';
import FilterDataList from './src/pages/FilterDataList';
import Signin from './src/pages/Signin';
import MyAds from './src/pages/myAds';
import favorites from './src/pages/favorites';
import MyRequest from './src/pages/MyRequest';
import EditProfile from './src/pages/EditProfile';
import testPage from './src/pages/testPage';

import { createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function MainStack()
// {
//   return(
//     <Stack.Navigator
//       initialRouteName="Main"
//       screenOptions={{
//         headerStyle: { backgroundColor: '#bd4039' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { fontWeight: 'bold' }
//       }}>
//         <Stack.Screen
//           name="Signin"
//           component={Signin}
//           />
//         <Stack.Screen
//           name="Signup"
//           component={SignupScreen}
//           />
//       </Stack.Navigator>
//   )
// }

function HomeStack() 
{
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#bd4039' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: 'Sign In' }}/>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Sign Up' }}/>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{title: 'Main Page'}} />
        <Stack.Screen
          name="ItemDisplay"
          component={ItemDisplay}
          options={{title: 'Item Display'}} />
    </Stack.Navigator>
  );
}

function MenuStack() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: { backgroundColor: '#bd4039' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: 'Menu' }}/>
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ title: 'Sign In' }}/>
    <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: 'Sign Up' }}/>
      <Stack.Screen
        name="Suggestion"
        component={SuggestionScreen}
        options={{title: 'Suggestion & Feedback'}}/>
      <Stack.Screen
        name="Contact"
        component={ContactPage}
        options={{title: 'Contact Us'}} />
      <Stack.Screen
        name="Help"
        component={HelpPage}
        options={{title: 'Help'}} />
      <Stack.Screen
        name="FAQ"
        component={FAQpage}
        options={{title: 'FAQ'}} />
      <Stack.Screen
        name="Main"
        component={MainPage}
        options={{title: 'Ads'}} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}} />
      <Stack.Screen
        name="ItemDisplay"
        component={ItemDisplay}
        options={{title: 'Item Display'}} />
      <Stack.Screen
        name="FeedbackList"
        component={FeedbackList}
        options={{title: 'User Feedbacks'}} />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{title: 'Categories'}} />
     <Stack.Screen
        name="Users"
        component={Users}
        options={{title: 'Users List'}} />
      <Stack.Screen
        name="FilterData"
        component={FilterDataList}
        options={{title: 'Ads'}} />
      <Stack.Screen
        name="MyRequest"
        component={MyRequest}
        options={{title: 'My Requests'}} />
      <Stack.Screen
        name="MyAds"
        component={MyAds}
        options={{title: 'My Ads'}} />
      <Stack.Screen
        name="Favorites"
        component={favorites}
        options={{title: 'My Favorites'}} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}} />
      <Stack.Screen
        name="test"
        component={testPage}
        options={{title: 'test'}} />
</Stack.Navigator>
  );
}
function PostAdStack() {
    return (
        <Stack.Navigator
          initialRouteName="PostAd"
          screenOptions={{
            headerStyle: { backgroundColor: '#bd4039' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
          <Stack.Screen
            name="PostAd"
            component={PostAdScreen}
            options={{ title: 'PostAd Page' }}/>
          
        </Stack.Navigator>
    );
  }



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled={true}
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#8b0000',
          inActiveTintColor:'#666666',
        }}
        keyboardHidesTabBar={false}
        >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
                name="PostAdStack"
                component={PostAdStack}
                options={{
                    tabBarLabel: 'Post Ad',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="plus-circle-outline"
                        color={color}
                        size={size}
                    />
                    ),
                }} />
        
        <Tab.Screen
          name="MenuStack"
          component={MenuStack}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="menu"
                color={color}
                size={size}
              />
            ),
          }} />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;