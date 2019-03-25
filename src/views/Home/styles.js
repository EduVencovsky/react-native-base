import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingVertical: Platform.OS === 'android' ? 25 : 0,
    },
    hello: {
        fontSize: 30,
        marginVertical: 5,
    }
})

export default styles
