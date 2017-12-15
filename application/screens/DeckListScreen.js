import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base'
import { connect } from 'react-redux'
import { fetchDecksAction } from '@actions/DeckActions'
import * as StorageApi from '@api/StorageApi'

class DeckListScreen extends Component {

    componentDidMount() {
        let { fetchDecksAction } = this.props

        StorageApi.fetchData()
            .then(decks => {
                fetchDecksAction(decks)
            })
            .catch(e => {
                console.log(e)
            })
    }

    renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDeckScreen', item)}>
                <Card>
                    <CardItem>
                        <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24 }}>{item.title}</Text>
                            <Text style={{ fontSize: 18, color: '#666666' }}>{item.questions.length} cards</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        </View>
    )

    render() {
        let { decks } = this.props
        return (
            <View>
                <FlatList
                    data={Object.values(decks).sort((a, b) => a.title > b.title)}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index} />
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        decks: state.DeckReducers.decks,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchDecksAction: decks => dispatch(fetchDecksAction(decks))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen)