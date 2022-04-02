import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import sharedStyles from '../shared/sharedStyles';
import SearchButton from '../components/searchButton';
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

            <SearchButton style={sharedStyles.cityButton} buttonName={<Text>Search By City</Text>}></SearchButton>
            <SearchButton style={sharedStyles.countryButton} buttonName={<Text>Search By Country</Text>}></SearchButton>

        </ImageBackground>
    );
}


export default welcomeScreen;