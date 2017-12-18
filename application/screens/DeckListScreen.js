import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { fetchDecksAction } from '@actions/DeckActions'
import * as StorageApi from '@api/StorageApi'

class DeckListScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: ({ tintColor }) => <Text style={{ color: tintColor }}>Deck List</Text>,
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
                name="cards"
                color={tintColor}
            />
        ),
    });

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
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetailScreen', item)}>
                <Card>
                    <CardItem>
                        <Body style={styles.cardItem}>
                            <Text style={styles.titleDeck}>{item.title}</Text>
                            <Text style={styles.subTitleDeck}>{item.questions.length} cards</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleDeck: {
        fontSize: 24
    },
    subTitleDeck: {
        fontSize: 18,
        color: '#666666'
    }
})

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