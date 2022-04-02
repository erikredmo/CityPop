import React from 'react';
import { ImageBackground } from 'react-native';
import sharedStyles from '../shared/sharedStyles';
import backgroundindia from '../assets/backgroundindia.jpg';

function cityScreen(props) {
    return (
        <ImageBackground style={sharedStyles.background} source={backgroundindia}>
            <Text>
                Hej
            </Text>
        </ImageBackground>
    );
}

export default cityScreen;