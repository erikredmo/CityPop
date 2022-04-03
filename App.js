import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/welcomeScreen';
import Navigator from './routes/homeStack'; 
import "react-native-gesture-handler";

export default function App() {
  return (
    <Navigator />
  );
}


