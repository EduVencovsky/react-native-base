import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import Home from './views/Home/Home'

const HomeWithDrawer = createDrawerNavigator({
    Home: {
        screen: Home
    }
})

const AppNavigator = createStackNavigator(
    {
        home: {
            screen: HomeWithDrawer,
        },
    },
    {
        initialRouteName: 'home'
    },
)

export default createAppContainer(AppNavigator)
