import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet, Pressable} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Form  from '../components/GetLocation';
import faker from 'faker';
import { Dimensions,Image, TouchableOpacity} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

//constants 
const Screen_width=Dimensions.get("window").width;


export class Users extends React.Component
{

    constructor(props)
    {
        super(props);

        const fakeData= [];
        for(var a=0 ; a<50 ; a+= 1)
        {
            fakeData.push({
                type: 'NORMAL',
                item:{
                    id: a,
                    image: faker.image.avatar(),
                    name:faker.name.firstName(),
                    lastName: faker.name.lastName(),
                },
            });
        }

        this.state={
            list:new DataProvider((r1,r2)=> r1!== r2).cloneWithRows(fakeData),
        };

        this.layoutProvider=new LayoutProvider((a)=>{
            return this.state.list.getDataForIndex(a).type;
        },
        (type,dim)=>{
            switch(type)
                {
                    case 'NORMAL':
                        {
                            dim.width=Screen_width;
                            dim.height=65;
                            break;
                        }
                    default:
                        {
                            dim.width= 1;
                            dim.height= 1;
                            break;
                        }
                };
            }
        )
    }
    
    rowRenderer=(type,data) => {
        const {image, name, lastName} = data.item;
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ItemDisplay',this.image,this.name,this.lastName)}>
                <View style={styling.right}>
                    <Image source={{uri:image}} style={styling.image} />
                    <View style={styling.left}>
                        <Text style={styling.describe1}>{name} {lastName}</Text>
                        {/* <Text style={styling.describe2}>{</Text> */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render()
    {
        return(
            <View style={styling.mainV}>
                <View style={styling.container} >
                    <Pressable  style={styling.container} > 
                        <RecyclerListView
                            style={{flex:1}}
                            rowRenderer={this.rowRenderer}
                            dataProvider={this.state.list}
                            layoutProvider={this.layoutProvider}
                            showsVerticalScrollIndicator={false}
                        />
                    </Pressable>
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
    Txtlocation:
    {
        justifyContent: 'flex-start',
        // marginLeft:'20%',
        
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
        height: 50,
        width: 50,
    },
    describe1:
    {
        fontSize: 20,
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
});

export default Users;