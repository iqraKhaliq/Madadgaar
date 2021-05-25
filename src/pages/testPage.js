import React from 'react';
import {Component} from 'react';
import {View,Text,StyleSheet, Pressable} from 'react-native';
import faker, { fake } from 'faker';
import { Dimensions,Image, TouchableOpacity} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from "firebase";
import { useState } from 'react/cjs/react.development';

// LogBox.ignoreAllLogs(true);
//constants 
const Screen_width=Dimensions.get("window").width;

export class testPage extends React.Component
{

    constructor(props)
    {
        super(props);

        // const fakeData= [];
        // for(var a=0 ; a<2 ; a+= 1)
        // {
        //     fakeData.push({
        //         type: 'NORMAL',
        //         item:{
        //             id: a,
        //             image: faker.random.image(),
        //             name:faker.commerce.productName() ,
        //             // lastName: faker.name.lastName(),
        //         },
        //     });
        // }

    const reference = firebase.firestore();
    
    // const suggest = [];

    // suggest.push({
    //     type: 'NORMAL',
    //     item:{
    //         Email: 'abc',
    //         Feedback: 'blabla',
    //     },
    // });

    // suggest.push({
    //     type: 'NORMAL',
    //     item:{
    //         Email: 'abcd',
    //         Feedback: 'blabla bllllllllllla',
    //     },
    // });
    // suggest.push({
    //     type: 'NORMAL',
    //     item:{
    //         Email: 'abcd',
    //         Feedback: 'blabla bllllllllllla',
    //     },
    // });

           
        this.state={
            list:new DataProvider((r1,r2)=> r1!== r2).cloneWithRows(add()),
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
                            dim.height= 100;
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
        const {Email, Feedback} = data.item;
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ItemDisplay')}>
                <View style={styling.right}>
                    <View style={styling.left}>
                        <Text style={styling.describe1}>{Email} </Text>
                        <Text style={styling.describe2}>{Feedback}</Text>
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

function add()
{
    // const [data,setData]=useState(null);
    
    const reference = firebase.firestore();

        const suggest=[]
        reference.collection("suggestion").get().then((snap) => {
            // console.log('suggestion ' + snap.data().Email, snap.data().Feedback, snap.data());
            console.log('Total '+ snap.size);
            
            const suggest1=[];
            snap.forEach((docSnap) => {
                const {Email, Feedback}= docSnap.data();
                console.log(' suggestions ' + docSnap.data().Email, docSnap.data().Feedback);
                    console.log('testing again.................');
                    suggest1.push({
                        type: 'NORMAL',
                        item: {
                            Email,
                            Feedback,
                    },
                });
               
            });
           
    
            // for(var i of suggest1)
            // {
            //     suggest.push(i);
            // }
            suggest.push(...suggest1);
            console.log(suggest.length);
    
        });
    return suggest;
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
        marginTop: 5,
        paddingVertical:20,
        marginLeft:10,
    },
});

export default testPage;



// constructor() {
    //     super();
    //     const reference = firebase.default.firestore();
    //     const suggest = [];
    //     reference
    //       .collection("suggestion")
    //       .get()
    //       .then((querySnapshot) => {
    //         querySnapshot.forEach((doc, index) => {
    //           suggest.push({
    //             type: "NORMAL",
    //             item: {
    //               id: index,
    //               email: doc.data().Email,
    //               feedback: doc.data().Feedback,
    //             },
    //           });
    //         });
    //       });
    
    //     this.state = {
    //       list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(suggest),
    //     };
    
    //     this.layoutProvider = new LayoutProvider(
    //       () => {
    //         return this.state.list.getDataForIndex(0).type;
    //       },
    //       (type, dim) => {
    //         switch (type) {
    //           case "NORMAL": {
    //             dim.width = Screen_width;
    //             dim.height = 100;
    //             break;
    //           }
    //           default: {
    //             dim.width = 10;
    //             dim.height = 10;
    //             break;
    //           }
    //         }
    //       }
    //     );
    //   }
    
    