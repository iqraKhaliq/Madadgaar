import * as React from 'react';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
import {AuthContext} from './src/utils/utils';

if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig) ;
}
//icons for tab navigator
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vectors-icons/';

// imports for navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from "@react-navigation/drawer";

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
import Signin from './src/pages/Signin';
import MyAds from './src/pages/myAds';
import favorites from './src/pages/favorites';
import MyRequest from './src/pages/MyRequest';
import EditProfile from './src/pages/EditProfile';
import DonorDetails from './src/pages/DonorDetails';
import AdminDashboard from './src/pages/AdminDashboard';
import AdminItemDisplay from './src/pages/AdminItemDisplay';
import UserDetail from './src/pages/UserDetail';
import myFavoritesDisplay from './src/pages/myFavoritesDisplay';
import myRequestDisplay from './src/pages/myRequestDisplay';
import myAdsDisplay from './src/pages/myAdsDisplay';
import UpdateAd from './src/pages/UpdateAd';
import UploadScreen from './src/pages/UploadScreen';

import CategoryAll from './src/pages/categoryPages/CategoryAll';
import CategoryShoes from './src/pages/categoryPages/CategoryShoes';
import CategoryStationary from './src/pages/categoryPages/CategoryStationary';
import CategoryToys from './src/pages/categoryPages/CategoryToys';
import CategoryAccessories from './src/pages/categoryPages/CategoryAccessories';
import CategoryBooks from './src/pages/categoryPages/CategoryBooks';
import CategoryClothes from './src/pages/categoryPages/CategoryClothes';



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
const AdminS= createStackNavigator();

function AdminStack()
{
  return(
    <AdminS.Navigator
      initialRouteName="AdminDashboard"
      screenOptions={{
        headerStyle:{ backgroundColor: '#bd4039' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <AdminS.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{
            title: 'Admin Dashboard'}}/>
        <AdminS.Screen
          name="DonorDetails"
          component={DonorDetails}
          options={{
            title: 'Donated Items'}}/>
        <AdminS.Screen
          name="AdminItemDisplay"
          component={AdminItemDisplay}
          options={{
            title: 'Item Display'}}/>
        <AdminS.Screen
          name="FeedbackList"
          component={FeedbackList}
          options={{
            title: 'Users Feedback'}}/>
        <AdminS.Screen
          name="Users"
          component={Users}
          options={{
            title: 'Users List'}}/>
        <AdminS.Screen
          name="UserDetail"
          component={UserDetail}
          options={{
            title: 'User Detail'}}/>
      </AdminS.Navigator>
  )
}

function HomeStack() 
{
  return (
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: { backgroundColor: '#bd4039' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{title: 'Home',
              headerLeft: ()=> null,}} />
          <Stack.Screen
            name="myAdsDisplay"
            component={myAdsDisplay}
            options={{title: 'Item Display'}} />
          <Stack.Screen
            name="UpdateAd"
            component={UpdateAd}
            options={{title: 'Update Ad'}} />
          <Stack.Screen
            name="ItemDisplay"
            component={ItemDisplay}
            options={{title: 'Item Display'}} />
          <Stack.Screen
            name="Suggestion"
            component={SuggestionScreen}
            options={{title: 'Suggestion & Feedback'}}/>
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
            name="FAQ"
            component={FAQpage}
            options={{title: 'FAQ'}} />
          <Stack.Screen
            name="Contact"
            component={ContactPage}
            options={{title: 'Contact Us'}} />
          <Stack.Screen
            name="Help"
            component={HelpPage}
            options={{title: 'Help'}} />
          <Stack.Screen
            name="AdminItemDisplay"
            component={AdminItemDisplay}
            options={{
              title: 'Item Display'}}/>
          <Stack.Screen
            name="myFavoritesDisplay"
            component={myFavoritesDisplay}
            options={{
              title: 'Item Display'}}/>
          <Stack.Screen
            name="myRequestDisplay"
            component={myRequestDisplay}
            options={{
              title: 'Item Display'}}/>
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
              options={{ title: 'PostAd Page',
                headerLeft: ()=> null,}}/>
            <Stack.Screen
              name="MyRequest"
              component={MyRequest}
              options={{title: 'My Requests'}} />
            <Stack.Screen
              name="UpdateAd"
              component={UpdateAd}
              options={{title: 'Update Ad'}} />
            <Stack.Screen
              name="AdminItemDisplay"
              component={AdminItemDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="MyAds"
              component={MyAds}
              options={{title: 'My Ads'}} />
            <Stack.Screen
              name="Favorites"
              component={favorites}
              options={{title: 'My Favorites'}} />
            <Stack.Screen
              name="Suggestion"
              component={SuggestionScreen}
              options={{title: 'Suggestion & Feedback'}}/>
            <Stack.Screen
              name="FAQ"
              component={FAQpage}
              options={{title: 'FAQ'}} />
            <Stack.Screen
              name="Contact"
              component={ContactPage}
              options={{title: 'Contact Us'}} />
            <Stack.Screen
              name="Help"
              component={HelpPage}
              options={{title: 'Help'}} />
            <Stack.Screen
              name="myFavoritesDisplay"
              component={myFavoritesDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="myRequestDisplay"
              component={myRequestDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="myAdsDisplay"
              component={myAdsDisplay}
              options={{title: 'Item Display'}} />
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
              options={{ title: 'Search',
                headerLeft: ()=> null, }}/>
            <Stack.Screen
              name="CategoryAll"
              component={CategoryAll}
              options={{title: 'All'}}/>
            <Stack.Screen
              name="CategoryToys"
              component={CategoryToys}
              options={{title: 'Toys'}}/>
            <Stack.Screen
              name="CategoryStationary"
              component={CategoryStationary}
              options={{title: 'Stationary'}}/>
            <Stack.Screen
              name="CategoryShoes"
              component={CategoryShoes}
              options={{title: 'Shoes'}}/>
            <Stack.Screen
              name="CategoryClothes"
              component={CategoryClothes}
              options={{title: 'Clothes'}}/>
            <Stack.Screen
              name="CategoryBooks"
              component={CategoryBooks}
              options={{title: 'Books'}}/>
            <Stack.Screen
              name="CategoryAccessories"
              component={CategoryAccessories}
              options={{title: 'Accessories'}}/>
            <Stack.Screen
              name="AdminItemDisplay"
              component={AdminItemDisplay}
              options={{
                title: 'Item Display'}}/>
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
              name="ItemDisplay"
              component={ItemDisplay}
              options={{title: 'Item Display'}} />
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
              name="details"
              component={DonorDetails}
              options={{title: 'Details'}} />
            <Stack.Screen
              name="myFavoritesDisplay"
              component={myFavoritesDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="myRequestDisplay"
              component={myRequestDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{title: 'Edit Profile'}} />
            <Stack.Screen
              name="myAdsDisplay"
              component={myAdsDisplay}
              options={{title: 'Item Display'}} />
            <Stack.Screen
              name="UpdateAd"
              component={UpdateAd}
              options={{title: 'Update Ad'}} />
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
              options={{ title: 'My Account',
                headerLeft: ()=> null, }}/>
            <Stack.Screen
              name="DonorDetails"
              component={DonorDetails}
              options={{title: 'Donated Items'}}/>
            <Stack.Screen
              name="AdminItemDisplay"
              component={AdminItemDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="FeedbackList"
              component={FeedbackList}
              options={{title: 'User Feedbacks'}} />
            <Stack.Screen
              name="Users"
              component={Users}
              options={{title: 'Users List'}} />
            <Stack.Screen
              name="FAQ"
              component={FAQpage}
              options={{title: 'FAQ'}} />
            <Stack.Screen
              name="Contact"
              component={ContactPage}
              options={{title: 'Contact Us'}} />
            <Stack.Screen
              name="Help"
              component={HelpPage}
              options={{title: 'Help'}} />
            <Stack.Screen
              name="Suggestion"
              component={SuggestionScreen}
              options={{title: 'Suggestion & Feedback'}}/>
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
              name="myFavoritesDisplay"
              component={myFavoritesDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="myRequestDisplay"
              component={myRequestDisplay}
              options={{
                title: 'Item Display'}}/>
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{title: 'Edit Profile'}} />
            <Stack.Screen
              name="myAdsDisplay"
              component={myAdsDisplay}
              options={{title: 'Item Display'}} />
            <Stack.Screen
              name="UpdateAd"
              component={UpdateAd}
              options={{title: 'Update Ad'}} />
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
          // keyboardHidesTabBar: false,
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
          }}
           />
        
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
           <StackMain.Screen name="AdminStack" component={AdminStack} options={{headerShown: false}}/> 
         </StackMain.Navigator>
      </NavigationContainer>
  )
}

export default App;