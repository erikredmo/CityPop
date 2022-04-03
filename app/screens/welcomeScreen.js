import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import sharedStyles from '../shared/sharedStyles';
import CityButton from '../components/CityButton';
import CountryButton from '../components/CountryButton';
import backgroundindia from '../assets/backgroundindia.jpg';


function welcomeScreen(props) {
    return (
        <ImageBackground
            style={sharedStyles.background}
            source={backgroundindia}>
            <Text style={sharedStyles.header}>
                CityPop
            </Text>
            <Text style={sharedStyles.headerInformation}>
                The easiest way to find out the population of a city. Search by city or country to find out!
            </Text>

            <CityButton
                buttonText={<Text>Search By City</Text>} navigation={props.navigation}>
            </CityButton>
            <CountryButton
                buttonText={<Text>Search By Country</Text>} navigation={props.navigation}>
            </CountryButton>

        </ImageBackground>
    );
}


export default welcomeScreen;