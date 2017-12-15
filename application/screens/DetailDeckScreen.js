import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class DetailDeckScreen extends Component {

    render() {
        return (
            <View>
                <Text>Detail Deck</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        decks: state.DeckReducers.decks,
    }
}

export default connect(mapStateToProps)(DetailDeckScreen);