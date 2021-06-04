import React from 'react';
import {View, Text, Button} from 'react-native';

export default class AdminDashboard extends React.Component
{
    render()
    {
        return(
            <View>
                <Button 
                    color={"#fa8072"} 
                    title="Donated Items"
                    size={25}  
                    onPress={() => this.props.navigation.navigate('DonorDetails')}
                    />
                <Button 
                    color={"#fa8072"} 
                    title="Users Feedback"
                    size={25}  
                    onPress={() => this.props.navigation.navigate('FeedbackList')}
                    />
            </View>
        )
    }
}