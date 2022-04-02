import { StyleSheet } from 'react-native';

export default sharedStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLooks: {
        backgroundColor: 'rgb(231, 224, 234)',
        padding: 10,
        borderRadius: 6,
        marginVertical: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cityButton: {
        position: 'absolute',
        top: 175,
        padding: 10,
        borderRadius: 6,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 70,
        backgroundColor: 'rgb(231, 224, 234)',
    },

    countryButton: {
        position: 'absolute',
        top: 250,
        padding: 10,
        borderRadius: 6,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 70,
        backgroundColor: 'rgb(231, 224, 234)',
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
    }
})
