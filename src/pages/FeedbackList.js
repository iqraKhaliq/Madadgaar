import React,{ Component } from "react";
import {View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import { ScrollView } from 'react-native-gesture-handler';
import faker from 'faker';
import * as firebase from "firebase";

const Screen_width=Dimensions.get("window").width;

export default class FeedbackList extends React.Component
{
    constructor()
    {
        super();

        const reference = firebase.firestore();
        const suggest = [];
             
        console.log("left");

        for(var a=0; a<5;a++){
            //fake data
            suggest.push({
                type: 'NORMAL',
                item:{
                id: 1,
                email: faker.internet.email(),
                feedback: faker.company.catchPhraseAdjective(),
                }
            });
        
            const snap=async() =>{
                 const snapShot =await reference.collection("suggestion").get();
                snapshot.forEach(documentSnapshot =>{
                    alert('here');
                    console.log(documentSnapshot.id,documentSnapshot.data())
                    suggest.push({
                    type: 'NORMAL',
                    item:{
                        id:a,
                        email: documentSnapshot.data().email,
                        feedback: documentSnapshot.data().feedback,
                    },
                });
            }
        )};
        }

        this.state={
            newSuggest: [],
            list:new DataProvider((r1,r2)=> r1!== r2).cloneWithRows(suggest),
        };

    
        this.layoutProvider=new LayoutProvider(()=>{
            return this.state.list.getDataForIndex(0).type;
        },
        (type,dim)=>{
            switch(type)
                {
                    case 'NORMAL':
                        {
                            dim.width=Screen_width;
                            dim.height= 100;
                            break;
                        }
                    default:
                        {
                            dim.width= 10;
                            dim.height= 10;
                            break;
                        }
                };
            }
        );
    }    
        
    
    rowRenderer=(type,data) => {
        const {email, feedback} = data.item;
        return(
            <TouchableOpacity >
                <View style={styling.right}>
                    <View style={styling.left}>
                        <Text style={styling.describe1}>{email} </Text>
                        <Text style={styling.describe2}>{feedback}</Text>
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
                        />
                    </Pressable>
                </View>

            </View>
        );
    }
}


const styling= StyleSheet.create({
    mainV:
    {
        padding:10,
        backgroundColor:'#fffaf0',
        height:'100%',
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
        backgroundColor:'#ffe4e1',
    },
    container:
    {
        minHeight: 1,
        minWidth:1,
        flex: 1,
        backgroundColor:'#fffaf0',
        padding: 2,
    },
    describe1:
    {
        fontSize: 20,
        color: 'darkred',
        // fontStyle:'italic',
        fontWeight:'bold',
        padding:3,
        margin:3,
    },
    describe2:
    {
        fontSize: 20,
        color: '#dc143c',
        padding:3,
        margin:3,
    },
});