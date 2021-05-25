import React,{Component,useState} from 'react';
import faker from 'faker';
import {View, Text, Dimensions, Button,Image, StyleSheet,ToastAndroid, TouchableOpacity} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as firebase from "firebase";
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

// constant for screen width
const Screen_width=Dimensions.get("window").width;

export default class ItemDisplay extends Component
{
    // state={
    //     change: false,
    // };

    

    constructor(props)
    {
        super(props);

        global.subId= uuidGenerator();

        const fakeData= [];
        for( var a=0 ; a<1 ; a+= 1)
        {
            fakeData.push({
                type: 'NORMAL',
                item:{
                    id: a,
                    image: faker.image.business(),
                    name:faker.commerce.productName(),
                    description: faker.random.words(5),
                },
            });
        }
        
        this.state={
            color: false,
            list:new DataProvider((r1)=> r1).cloneWithRows(fakeData),
        };
        
        // update=()=> {
        //     this.setState({color: true});
        // };

        this.layoutProvider=new LayoutProvider((a)=>{
            return this.state.list.getDataForIndex(a).type;
        },
        (type,dim)=>{
            switch(type)
                {
                    case 'NORMAL':
                        {
                            dim.width=Screen_width;
                            dim.height= 600;
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
        const {image, name, description} = data.item;
        return(
            <View style={styling.right}>
                <View>
                    <View style={styling.rowStyleV}>
                        <Image source={{uri:image}} style={styling.image} />
                        <MaterialCommunityIcons 
                            name='cards-heart' 
                            size={30} 
                            color={this.state.color ? "red": "white"}  
                            style={styling.icon} 
                            onPress={this.addTo}
                            />
                    </View>

                    <View style={styling.left}>
                        <Text style={styling.describe1}>{name}</Text>
                        <Text style={styling.describe2}>{description}</Text>
                        <Button 
                            color={"#fa8072"} 
                            title="Request Item"
                            size={25}  
                            onPress={this.requestData} 
                        />
                        
                    </View>
                </View>
            </View>
            )
    }

    render()
    {
        return(
            <View style={styling.container} >
                <RecyclerListView
                    rowRenderer={this.rowRenderer}
                    dataProvider={this.state.list}
                    layoutProvider={this.layoutProvider}
                    showsHorizontalScrollIndicator={false}
                    />
            </View>
        )
    }

    addTo= async()=>
    {
        const reference=firebase.firestore().collection("favorites");
        const uuid= firebase.auth().currentUser.uid;
        // const subId =uuidGenerator();

        try
        {
            if(this.state.color === true)
            {
                try
                {
                    // const count= firebase.firestore.FieldValue.increment(-1);
                    // await reference.doc(uuid).collection('myfav').doc(subId).update({
                    //         ProductId: firebase.firestore.FieldValue.delete(),
                    // });

                    await reference.doc(uuid).collection('myfav').doc(subId).delete();

                    //color set to white
                    this.setState({color: false});
                    ToastAndroid.show('Removed from Favorites', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
                catch(e)
                {
                    ToastAndroid.show('Network Failed :(', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
            }
            else if(this.state.color === false)
            {
                try
                {
                    await reference.doc(uuid).collection('myfav').doc(subId).set({
                        ProductId: 3,
                    },{merge: true});
                    
                    //color set to red
                    this.setState({color: true});
                    ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
                catch(e)
                {
                    ToastAndroid.show('Network failed :(',ToastAndroid.SHORT,ToastAndroid.BOTTOM);
                }
            }
        }
        catch(e)
        {
            ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
        }
    }

    // requestData= async() =>{

    // }
}

function uuidGenerator()
{
    return 'xyxyxyxxxxxy'.replace(/[xy]/g, function(c){
      var a= Math.random() * 16 | 0,v = c == 'x' ? a: (a & 0x3|0x8);
      return v.toString(16);
    });
}



const styling=StyleSheet.create({
    left:
    {
        // flex:1,
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        color: 'darkred',
        padding: 5,
        margin: 5,
        // flexDirection:'column',   
    },
    right:
    {
        padding: 10,
        margin: 10,
        flexDirection:'column',
        justifyContent: 'space-evenly',   
        backgroundColor:'#ffe4c4',
    },
    rowStyleV:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container:
    {
        // minHeight: 100,
        // minWidth:100,
        flex: 1,
        backgroundColor:'#fffaf0',
        padding: 10,
        flexDirection:'column',   
    },
    image:
    {
        height: 200,
        width: 200,
        alignContent:'flex-start',
        padding:5,
        margin:5,
    },
    describe1:
    {
        fontSize: 25,
        color: 'darkred',
        fontStyle:'italic',
        fontWeight:'bold',
        // padding:5,
        margin:5,
    },
    describe2:
    {
        fontSize: 20,
        color: '#dc143c',
        // padding:5,
        margin:5,
    },
    icon:
    {
        flexDirection:'row-reverse',   
    },
    txt:
    {
        alignItems:'center',
        fontSize: 20,
        color: 'darkred',
        backgroundColor:'#fa8072',
        padding:8,
        margin:8,
        alignContent: 'center',
        width: 200,
    },
});


