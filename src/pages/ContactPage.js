import React ,{Component}from 'react';
import {View,Text,StyleSheet, Button,TextInput} from 'react-native';
import {Feather} from "@expo/vector-icons";

export default class ContactPage extends React.Component
{
    render()
    {
        return(
            <View style={styl.Vstyl}>
                <Text style={styl.Tstyl}><Feather name='phone' size={20} color='darkred' /> Phone Number</Text>
                <Text style={styl.Tstyl2}>+92 0900 78601</Text>
                <Text style={styl.Tstyl}><Feather name='mail' size={20} color='darkred' /> Email Address</Text>
                <Text style={styl.Tstyl2}>madadgaar@gmail.com</Text>
                <Text style={styl.Tstyl}><Feather name='facebook' size={20} color='darkred' /> Facebook</Text>
                <Text style={styl.Tstyl2}>Madadgaar</Text>
                <Text style={styl.Tstyl}><Feather name='instagram' size={20} color='darkred' /> Instagram</Text>
                <Text style={styl.Tstyl2}>Madadgaar</Text>
                <Text style={styl.Tstyl}><Feather name='home' size={20} color='darkred' /> Address</Text>
                <Text style={styl.Tstyl2}>COMSATS University Islambad, Lahore Campus.</Text>
            </View>
        );
    }
}

const styl= StyleSheet.create({
    Vstyl:
    {
        padding: 10,
        flex: 1,
        fontSize: 30,
        backgroundColor: 'seashell',
        textAlign: 'left',
        flexDirection: 'column',
        margin: 10,
    },
    Tstyl:
    {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'darkred',
        margin: 5,
    },
    Tstyl2:
    {
        textAlign: 'left',
        fontSize: 20,
        color: 'darkred',
        paddingLeft: 5,
        margin: 5,
        marginLeft: 10,
    },
});
