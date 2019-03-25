import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './views/Home/Home'

const AppNavigator = createStackNavigator(
    {
        home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'home'
    },
)

export default createAppContainer(AppNavigator)
