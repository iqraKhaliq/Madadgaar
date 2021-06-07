import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class AdminDashboard extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('DonorDetails')}
                        >
                        <Text style={styles.txtStyl}>Donated Items</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('FeedbackList')}
                        >
                        <Text style={styles.txtStyl}>Users Feedback</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Users')}
                        >
                        <Text style={styles.txtStyl}>Users List</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:
    {
        paddingTop: 180,
        margin: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    button: 
    {
        alignItems: 'center',
        backgroundColor: '#fa8072',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 35,
        padding: 5,
        width: 350,
    },
    txtStyl:
    {
        color:'white',
        fontWeight:'500',
        fontSize: 40,
    },
});