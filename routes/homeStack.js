import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import welcomeScreen from "../app/screens/welcomeScreen";
import cityScreen from "../app/screens/cityScreen";
import countryScreen from "../app/screens/countryScreen";


const screens = {
    WelcomeScreen: {
        screen: welcomeScreen
    },
    CityScreen: {
        screen: cityScreen
    },
    CountryScreen: {
        screen: countryScreen
    }
}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);