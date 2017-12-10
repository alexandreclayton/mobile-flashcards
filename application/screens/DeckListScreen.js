import React, { Component } from 'react'
import { View, Text } from 'react-native'


export default class DeckListScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1
                , justifyContent: 'center'
                , alignItems: 'center'
            }}>
                <Text>Text de aplicação.</Text>
            </View>
        )
    }
}
