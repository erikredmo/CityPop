import React from 'react';
import { TouchableOpacity, Text, Alert, onPress, View } from 'react-native';
import sharedStyles from '../shared/sharedStyles';


/*
*  Button component to be used for buttons in screens
*  Input props: 
*  text -    string to be displayed on the button 
*  onPress - function to be executed when the button is pressed
*  
*/

export default function SearchButton({ buttonName }) {
    return ( 
        <View style={sharedStyles.buttonLooks}>
            <TouchableOpacity onPress={() => alert('hey')}>
                <Text> { buttonName } </Text>
            </TouchableOpacity>
        </View>
    )

}