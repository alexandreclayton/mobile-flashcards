import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'

import * as Screens from '@screens';

const Tabs = TabNavigator({
    DeckListScreen: {
        screen: Screens.DeckListScreen,
        navigationOptions: {
            tabBarLabel: 'All Decks'
        },
    }
    ,
    DeckNewScreen: {
        screen: Screens.DeckNewScreen,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        },
    }
});

export const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: { title: 'Flash Cards' }
    },
    DeckDetailScreen: {
        screen: Screens.DeckDetailScreen,
        navigationOptions: {
            headerTintColor: '#000',
        }
    },
    CardNewScreen: {
        screen: Screens.CardNewScreen,
        navigationOptions: {
            headerTintColor: '#000',
        }
    },
    QuizScreen: {
        screen: Screens.QuizScreen,
        navigationOptions: {
            headerTintColor: '#000',
        }
    }
});