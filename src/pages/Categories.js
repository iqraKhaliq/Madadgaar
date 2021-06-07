import React,{Component} from 'react';
import {View,Text,StyleSheet,Pressable,TouchableOpacity,ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';

export class Categories extends React.Component
{
    render()
    {
        return(
            <View style={styling.mainV}>
                <View style={styling.container} >
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
                </View>
            </View>
        );
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
});

export default Categories;