import React,{useState} from "react";
import * as firebase from "firebase";
import {View,Text,StyleSheet, Button,TextInput,ToastAndroid} from "react-native";


function SuggestionScreen()
{
    const [todo, setTodo] = useState("");
    const [description, setDescription] = useState("");
    const reference = firebase.firestore().collection("suggestion");
  
    async function addData() 
    {
        try{
            if(todo === "")
            {
                alert("Empty Email Field");
                ToastAndroid.show('Empty Email Field',ToastAndroid.LONG, ToastAndroid.BOTTOM);
            }
            else if(description === "")
            {
                alert("Empty Description Field");
                ToastAndroid.show('Empty Description Field',ToastAndroid.LONG, ToastAndroid.BOTTOM);
            }
            else if((todo!== "") && (description !== ""))
            {
                await reference.add({
                    Email: todo,
                    Feedback: description,
                });
                ToastAndroid.show('Successful',ToastAndroid.LONG, ToastAndroid.BOTTOM);
                setTodo("");
                setDescription("");
            }        
        }
        catch(e)
        {
            ToastAndroid.show('Not Successful',ToastAndroid.LONG, ToastAndroid.BOTTOM);
            alert('Try Again...');
        }
    }
      
    return(
            <View style={styl.Vstyl}>
                <Text style={styl.Tstyl}>How can we Help you?</Text>
                <TextInput 
                    style={styl.Tstyl2} 
                    placeholder=' e.g. abc@gmail.com' 
                    placeholderTextColor='darkred' 
                    value={todo}
                    onChangeText={setTodo}
                    >
                </TextInput>
                <TextInput 
                    style={styl.TIstyl} 
                    multiline={true} 
                    placeholder='Write Suggestion or Feedback Here ...'
                    placeholderTextColor='darkred' 
                    value={description}
                    onChangeText={setDescription}
                    >
                </TextInput>
                <Button 
                    size={10}  
                    color={"#e9967a"} 
                    title="Submit" 
                    onPress={() => addData()}
                />
            </View>
    );
}

const styl= StyleSheet.create({
    Vstyl:
    {
        padding: 10,
        paddingTop: 20,
        flex: 1,
        fontSize: 30,
        backgroundColor: 'white',
        textAlign: 'left',
        flexDirection: 'column',
    },
    Tstyl:
    {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'maroon',
        
    },
    Tstyl2:
    {
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '800',
        color: 'darkred',
        backgroundColor: '#ffdab9',
        padding: 5,
        margin: 5,
        width:250,
        borderRadius: 10,
    },
    TIstyl:
    {
        padding:10,
        fontWeight: 'bold',
        textAlign: 'justify',
        backgroundColor: '#ffe4e1',
        fontSize: 15,
        color: 'darkred',
        margin: 5,
        borderRadius: 10,
    },
});

export default SuggestionScreen;