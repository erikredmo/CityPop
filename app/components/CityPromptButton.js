import React from 'react';
import { TouchableOpacity, Text, Alert, onPress, View, Alert } from 'react-native';
import sharedStyles from '../shared/sharedStyles';



export default function cityPromptButton({ buttonText, navigation }) {
    return ( 
        <View style={sharedStyles.buttonContainer}>
            <TouchableOpacity style={sharedStyles.countryButton} onPress={Alert.prompt("Hej", "baby")}>
                <Text> { buttonText } </Text>
            </TouchableOpacity>
        </View>
    )

}