import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import sharedStyles from '../shared/sharedStyles';
import backgroundindia from '../assets/backgroundindia.jpg';
import CityButton from '../components/CityButton';


function cityScreen(props) {
    return (
        <ImageBackground style={sharedStyles.background} source={backgroundindia}>
            <CityButton ButtonText={<Text>Enter a city</Text>} onPress={alert('hej')}>
            </CityButton>
        </ImageBackground>
    );
}

export default cityScreen;