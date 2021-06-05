import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet, Pressable} from 'react-native';
import {AntDesign,Octicons} from '@expo/vector-icons';
import {Ionicons} from "@expo/vector-icons";
import {ScrollView} from 'react-native-gesture-handler';

export default class helpPage extends React.Component
{
    render()
    {
        return(
            <View style={styl.Vstyl}>
                <Pressable onPress={()=>this.props.navigation.navigate('Contact')} >
                    <View style={styl.Vstyl2} > 
                        <Text style={styl.Tstyl} ><AntDesign name='phone' color='darkred' size={20} /> Contact Us </Text>
                        <AntDesign name='doubleright' color='darkred' size={20}  />
                    </View>
                </Pressable>
                
                <Pressable>
                    <View style={styl.Vstyl2}>
                        <Text style={styl.Tstyl}><AntDesign name='staro' color='darkred' size={20} /> Rate Us</Text>
                        <AntDesign name='doubleright' color='darkred' size={20} />
                    </View>
                </Pressable>
                
                <Pressable>
                    <View style={styl.Vstyl2}>
                        <Text style={styl.Tstyl}><Octicons name='versions' color='darkred' size={20} /> Version</Text>
                        <Text style={styl.Tstyl2}>1.0.0</Text>
                    </View>
                </Pressable>
               
                <Pressable onPress={()=>this.props.navigation.navigate('FAQ')}>
                    <View style={styl.Vstyl2}>
                        <Text style={styl.Tstyl}><AntDesign name='questioncircleo' color='darkred' size={20}  /> FAQ's </Text>
                        <AntDesign name='doubleright' color='darkred' size={20} />
                    </View>
                </Pressable>
                
                <Pressable onPress={()=>this.props.navigation.navigate('Suggestion')}>
                    <View style={styl.Vstyl2}>
                        <Text style={styl.Tstyl} ><AntDesign name='form' color='darkred' size={20} /> Suggestion & Feedback </Text>
                        <AntDesign name='doubleright' color='darkred' size={20} />
                    </View>
                </Pressable>
                
                <Pressable>
                    <View style={styl.Vstyl2}>
                        <Text style={styl.Tstyl}><AntDesign name='infocirlceo' color='darkred' size={20} /> About Us </Text>
                        <AntDesign name='doubleright' color='darkred' size={20} />
                    </View>
                </Pressable>  
            </View>
        );
    }
}

const styl= StyleSheet.create({
    Vstyl:
    {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'column',
        color: 'darkred',
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop:20,
        padding: 10,
        backgroundColor: 'white',
    },
    Vstyl2:
    {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        backgroundColor: '#ffe4e1',
        padding: 5,
        borderBottomWidth: 3,
        borderBottomColor:'#fa8072',
        margin:2,
    },
    Tstyl:
    {
        height: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkred',
        textAlign: 'left',
    },
    Tstyl2:
    {
        height: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkgray',
        textAlign: 'left',
    },
}
);