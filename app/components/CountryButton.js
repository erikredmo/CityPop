import React from 'react';
import { TouchableOpacity, Text, Alert, onPress, View } from 'react-native';
import sharedStyles from '../shared/sharedStyles';



export default function SearchButton({ buttonText }) {
    return ( 
        <View>
            <TouchableOpacity style={sharedStyles.countryButton} onPress={() => alert('hey')}>
                <Text> { buttonText } </Text>
            </TouchableOpacity>
        </View>
    )

}