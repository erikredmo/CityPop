import { StyleSheet } from 'react-native';

export default sharedStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    buttonContainer: {
        width: 180,
        top: 20,
        bottom: 20,
        justifyContent: 'center',
    },

    cityButton: {
        backgroundColor: 'rgb(231, 224, 234)',
        padding: 10,
        borderRadius: 6,
        width: 180,
        height: '24%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    countryButton: {
        backgroundColor: 'rgb(231, 224, 234)',
        padding: 10,
        borderRadius: 6,
        width: 180,
        height: '24%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        position: 'absolute',
        top: 70,
        left: 20,
        fontSize: 40,
        color: 'black',
    },

    headerInformation: {
        position: 'absolute',
        top: 130,
        left: 20,
        width: '75%',
        fontSize: 20,
        color: 'black',
    },

    searchScreenInfo: {
        position: 'absolute',
        top: 100,
        fontSize: 30,
        color: 'black'
    }
})
