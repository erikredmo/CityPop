import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import welcomeScreen from "../app/screens/welcomeScreen";


const screens = {
    WelcomeScreen: {
        screen: welcomeScreen
    }
}

const HomeStack = createStackNavigator();