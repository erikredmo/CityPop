import React from 'react';
import { TouchableOpacity, Text, Alert, onPress, View } from 'react-native';
import sharedStyles from '../shared/sharedStyles';



export default function SearchButton({ buttonText, navigation }) {
    const pressHandler = () => {
        navigation.navigate('CityScreen')
    }

    return ( 
        <View style={sharedStyles.buttonContainer}>
            <TouchableOpacity style={sharedStyles.cityButton} onPress={pressHandler}>
                <Text> { buttonText } </Text>
            </TouchableOpacity>
        </View>
    )

}