import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'

import * as Screens from '@screens';

const Tabs = TabNavigator({
    DeckList: {
        screen: Screens.DeckListScreen,
        navigationOptions: {
            tabBarLabel: 'All Decks'
        },
    }
    /*,
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        },
    },
    */
});

export const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: { title: 'Home' },
    }
    /*,
    IndividualDeck: {
        screen: IndividualDeck,
        navigationOptions: {
            headerTintColor: '#000',
        },
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#000',
        },
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Question',
            headerTintColor: '#000',
        },
    },
    */
});