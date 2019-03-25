import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import styles from './styles'
import ActionButton from 'react-native-action-button'

export default class Home extends Component {

    render() {
        return ([
            <View key='view' style={styles.container}>
                <Text style={styles.hello}>Hello World</Text>
                <Button
                    title='Go Home'
                    onPress={() => true}
                />
            </View>,
            <ActionButton
                key='actionbutton'
                title='hey'
                onPress={() => this.props.navigation.push('home', { isHome: true })}
            />
        ])
    }
}
