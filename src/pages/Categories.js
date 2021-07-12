import React,{useState,useEffect, Component} from 'react';
import {View,Text,StyleSheet,Pressable,TouchableOpacity,ScrollView,FlatList,ToastAndroid,Image,ActivityIndicator} from 'react-native';
import {Avatar} from 'react-native-paper';
import {SearchBar} from 'react-native-elements'; 
import * as firebase from 'firebase';

export class Categories extends Component
{
    state={
        searchData: "",
        data: [],
        loading: false,
    }

        componentDidMount()
        {
            try
            {
                firebase
                .firestore()
                .collection('ads')
                .where("ProductName", "==", this.state.searchData)
                .get()
                .then((docs) => {
                    let data= [];
                    const {Image1,ProductName,Description}=doc.data();
                    data.push({
                        id: docs.id,
                        Image1,
                        ProductName,
                        Description,
                    });
                })
                this.setState({data});
                // console.log(data);
            }
            catch(e)
            {
                // ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
            }
        }

        componentDidUpdate()
        {
            try
            {
                firebase
                .firestore()
                .collection('ads')
                .where("ProductName", "==", this.state.searchData)
                .get()
                .then((docs) => {
                    let data= [];
                    docs.forEach((doc) => {
                        if(doc.exists)
                        {
                            const {Image1,ProductName,Description}=doc.data();
                            data.push({
                                id: doc.id,
                                Image1,
                                ProductName,
                                Description,
                            });
                            this.setState({loading: false});
                        }
                    })
                    this.setState({data});
                    console.log(data);
                    this.setState({loading: true});
                })
            }
            catch(e)
            {
                ToastAndroid.show(e.toString(),ToastAndroid.SHORT,ToastAndroid.BOTTOM);
            }
        }

        render()
        {
            return(
                <View style={styling.mainV}>
                    <View style={styling.container} >
                    <View>
                    <SearchBar
                        placeholder="Search Here ...."
                        placeholderTextColor="#808080"
                        lightTheme
                        round
                        style={{height: 15, flex: 1, width: 200}}
                        value={this.state.searchData}
                        onChangeText={word => this.setState({searchData: word})}
                        />
                        {/* <Text>{this.state.searchData}</Text> */}
                    </View>
                        <View style={styling.Vstyle2}>
                            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
    
                            <Pressable onPress={()=> this.props.navigation.navigate('CategoryBooks')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/books.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Books</Text>
                                    </View>
                            </Pressable>
    
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryClothes')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/clothes.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Clothes</Text>
                                    </View>
                                </Pressable>
    
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryStationary')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/stationary.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Stationary</Text>
                                    </View>
                                </Pressable>
                                
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryAccessories')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/accessories.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Accessories</Text>
                                    </View>
                                </Pressable>
                                
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryShoes')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/shoes.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Shoes</Text>
                                    </View>
                                </Pressable>
                                
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryToys')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/toys.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>Toys</Text>
                                    </View>
                                </Pressable>
                                
                                <Pressable onPress={()=> this.props.navigation.navigate('CategoryAll')}>
                                    <View style={styling.Vstyle1}>
                                        <Avatar.Image
                                            source={require('../icons/all.png')}
                                            size={70}
                                            backgroundColor={'#fff'} 
                                            />
                                        <Text style={styling.Txt}>All</Text>
                                    </View>
                                </Pressable>
                            </ScrollView>
                        </View>
    
                        <View>
                        {/* {this.state.loading && <ActivityIndicator size="large" color="#800000"/>} */}
                        {!this.state.loading && <View style={styling.loader}><Text style={styling.Txt}>Nothing to Display :(</Text></View>}
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <FlatList
                                    style={styling.container}
                                    data={this.state.data}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({item}) => (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDisplay',{id: item.id})}>
                                            <View style={styling.Vstyle}>
                                                <Image source={{uri: item.Image1}} style={{width: 100,height:100}}/>
                                                <View style={styling.VInstyle}>
                                                    <Text style={styling.Fstyle}>{item.ProductName}</Text>
                                                    <Text style={styling.Estyle}>{item.Description}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            )
        }   
}



const styling= StyleSheet.create({
    mainV:
    {
        padding: 10,
        // marginLeft: 10,
        backgroundColor:'#fffaf0',
        height:'100%',
    },
    container:
    {
        backgroundColor: '#fffaf0',
        padding:10,
        flexDirection:'column',
        marginBottom:30,
    },
    Txt:
    {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'maroon',
        fontSize: 20,
        fontWeight: 'bold',        
    },
    container:
    {
        minHeight: 1,
        minWidth:1,
        flex: 1,
        backgroundColor:'#fffaf0',
        padding: 2,
    },
    Vstyle1:
    {
        alignItems: 'center',
        padding: 5,
    },
    Vstyle2:
    {
        padding:5,
        margin:5,
        alignItems: 'center',
        backgroundColor: '#ffe4e1',
    },
    Vstyle:
    {
        backgroundColor: 'darksalmon',
        padding:5,
        margin:5,
        flexDirection:'row',
    },
    VInstyle:
    {
        backgroundColor: 'darksalmon',
        flexDirection:'column',
        paddingLeft:8,
    },
    Estyle:
    {
        fontSize: 20,
        color: 'maroon',
        // padding: 10,
        margin:5,
    },
    Fstyle:
    {
        fontSize: 30,
        color: 'maroon',
        // padding: 10,
        margin:5,
    },
    loader:
    {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '80%',
    }
});

export default Categories;

