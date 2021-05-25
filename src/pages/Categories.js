import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet, Pressable} from 'react-native';
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import Form  from '../components/GetLocation';
import faker from 'faker';
import { Dimensions,Image, TouchableOpacity} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import { ScrollView } from 'react-native-gesture-handler';

export class Categories extends React.Component
{
    render()
    {
        return(
            <View style={styling.mainV}>
                <View style={styling.container} >
                    <View style={styling.Vstyle2}>
                        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <MaterialIcons 
                                        name="library-books" 
                                        color="darkred" 
                                        size={40} 
                                        style={styling.icn} 
                                    />
                                    <Text style={styling.Txt}>Books</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <FontAwesome5 
                                        name="tshirt" 
                                        color="darkred" 
                                        size={40} 
                                        style={styling.icn} 
                                    />
                                    <Text style={styling.Txt}>Clothes</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <FontAwesome5 
                                        name="toolbox"
                                        color="darkred"
                                        size={40}
                                        style={styling.icn}
                                    />
                                    <Text style={styling.Txt}>Stationary</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <MaterialCommunityIcons 
                                        name="ring"
                                        color="darkred"
                                        size={40}
                                        style={styling.icn}
                                    />
                                    <Text style={styling.Txt}>Accessories</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <MaterialCommunityIcons 
                                        name="shoe-heel"
                                        color="darkred"
                                        size={40}
                                        style={styling.icn}
                                    />
                                    <Text style={styling.Txt}>Shoes</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <MaterialCommunityIcons 
                                        name="baseball-bat"
                                        color="darkred"
                                        size={40}
                                        style={styling.icn}
                                    />
                                    <Text style={styling.Txt}>Toys</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={()=> this.props.navigation.navigate('FilterData')}>
                                <View style={styling.Vstyle1}>
                                    <MaterialCommunityIcons 
                                        name="wallet-travel"
                                        color="darkred"
                                        size={40}
                                        style={styling.icn}
                                    />
                                    <Text style={styling.Txt}>All</Text>
                                </View>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styling= StyleSheet.create({
    vst:
    {
        backgroundColor: '#fa8072',
        padding: 5,
        margin:5,
        fontSize:20,
        color: 'white',
        width:100,
        alignItems: 'center',
        justifyContent:'center',
    },
    vt:
    {
        marginLeft:5,
    },
    mainV:
    {
        padding:10,
        backgroundColor:'#fffaf0',
        height:'100%',
    },
    Txt:
    {
        justifyContent: 'center',
        marginLeft:8,
        marginRight:8,
        paddingLeft:8,
        paddingRight:8,
        alignItems: 'center',
        color: 'darkred',
        fontSize: 20,
        fontWeight: 'bold',        
    },

    left:
    {
        flex:1,
        alignItems: 'baseline',
        justifyContent: 'space-around',
        color: 'darkred',
        paddingTop: 3,
        marginTop: 3,
        paddingBottom:3,
        marginBottom:3,
        paddingLeft:5,
    },
    right:
    {
        paddingTop: 3,
        marginTop: 3,
        paddingBottom:3,
        marginBottom:3,
        paddingLeft:5,
        flexDirection:'row',   
        backgroundColor:'#ffe4c4',
    },
    container:
    {
        minHeight: 1,
        minWidth:1,
        flex: 1,
        backgroundColor:'#fffaf0',
        padding: 2,
    },
    image:
    {
        height: 80,
        width: 80,
    },
    describe1:
    {
        fontSize: 25,
        color: 'darkred',
        fontStyle:'italic',
        fontWeight:'bold',
    },
    describe2:
    {
        fontSize: 20,
        color: '#dc143c',
        padding:3,
        margin:3,
    },
    icn:
    {
        marginRight: 3,
        padding:2,
        marginLeft:3,
    },
    Vstyle1:
    {
        alignItems: 'center',
    },
    Vstyle2:
    {
        padding:5,
        margin:5,
        alignItems: 'center',
        backgroundColor: '#ffe4e1',
    },
});

export default Categories;