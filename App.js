import * as React from 'react';

if(!firebase.apps.length)
{
  firebase.initializeApp( firebaseConfig ) ;
}

//icons for tab navigator
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// imports for navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// importing screens
import HomeScreen from './src/pages/HomeScreen';
import MenuScreen from './src/pages/MenuScreen';
import SigninScreen from './src/pages/Signin';
import SignupScreen from './src/pages/Signup';
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
import DonorDetails from './src/pages/DonorDetails';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';


//for drawer navigation
const Drawer= createDrawerNavigator();

function MenuDrawer({navigation})
{
  return(
    <Drawer.Navigator 
      initialRouteName="Main"
      drawerContent={()=> <MenuScreen navigation={navigation} />}
      >
      <Drawer.Screen
        name="Main"
        component={MainApp}
        screenOptions={{
          headerStyle: { backgroundColor: '#bd4039' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
        />
      
    </Drawer.Navigator>
  )
}

// for tab navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
            name="Main"
            component={MainPage}
            options={{title: 'Home'}} />
          <Stack.Screen
            name="ItemDisplay"
            component={ItemDisplay}
            options={{title: 'Item Display'}} />
          <Stack.Screen
            name="details"
            component={DonorDetails}
            options={{title: 'Details'}} />
      </Stack.Navigator>
  );
}

function MenuStack() 
{
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerStyle: { backgroundColor: '#bd4039' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        {/* <Stack.Screen
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
        <Stack.Screen
          name="details"
          component={DonorDetails}
          options={{title: 'Details'}} /> */}
    </Stack.Navigator>
  );
}

function PostAdStack() 
{
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

function SearchStack() 
{
    return (
        <Stack.Navigator
          initialRouteName="Search"
          screenOptions={{
            headerStyle: { backgroundColor: '#bd4039' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
            <Stack.Screen
              name="Search"
              component={Categories}
              options={{ title: 'Search' }}/>
        </Stack.Navigator>
    );
}

function AccountStack() 
{
    return (
        <Stack.Navigator
          initialRouteName="Account"
          screenOptions={{
            headerStyle: { backgroundColor: '#bd4039' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
            <Stack.Screen
              name="Account"
              component={Profile}
              options={{ title: 'My Account' }}/>
        </Stack.Navigator>
    );
}


// tab navigator
function MainApp() 
{
  return (
      <Tab.Navigator
        swipeEnabled={true}
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: '#8b0000',
          inActiveTintColor:'#666666',
        }}
        >
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
          }}
          listeners={({ navigation }) => ({
              tabPress: e => {
                e.preventDefault();
              navigation.openDrawer();
              }
            })}
          
           />

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
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="search"
                color={color}
                size={size}
              />
            ),
          }} />
        
        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={{
            tabBarLabel: 'My Account',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
              />
            ),
          }} />
          
      </Tab.Navigator>
  );
}

// start pages home, signin, Signup
const StackMain= createStackNavigator();

function App()
{
  return(
    <NavigationContainer>
      <StackMain.Navigator initialRouteName="Home">
        <StackMain.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <StackMain.Screen name="Signin" component={SigninScreen} options={{headerShown: false}} />
        <StackMain.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        <StackMain.Screen name="Main" component={MenuDrawer} options={{headerShown: false}} />
      </StackMain.Navigator>
    </NavigationContainer>
  )
}
export default App;