import React, { Component } from 'react'
import { H1, H3, Text, Button, Input, Form, Item, Label } from 'native-base'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import { deckAddAction, deckFieldChangeAction } from '@actions/DeckActions'

class DeckNewScreen extends Component {

    static navigationOptions = {
        headerTitle: `New Deck`,
        tabBarLabel: ({ tintColor }) => <Text style={{ color: tintColor }}>New Deck</Text>,
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons
                name="add"
                color={tintColor}
            />
        )
    }

    render() {

        const { deck, deckAddAction, deckFieldChangeAction, navigation } = this.props
        const { goBack } = navigation

        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <H1 style={styles.titleDeckName}> What's the title of your new deck? </H1>
                    <Form style={styles.input}>
                        <Item floatingLabel>
                            <Label>Deck Title</Label>
                            <Input
                                onChangeText={(value) => deckFieldChangeAction('title', value)}
                                value={deck.title}
                            />
                        </Item>
                    </Form>
                </View>
                <View style={styles.buttonContainer}>
                    <Button primary style={styles.button} block onPress={() => deckAddAction(deck, goBack)}>
                        <Text> Create Deck </Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    cardItem: {
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1
    },
    titleDeckName: {
        flex: 1,
        marginTop: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f4f6f9'
    },
    input: {
        flex: 2,
        alignSelf: 'stretch'
    },
    button: {
        margin: 15,
    },
    infoContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

function mapStateToProps(state) {
    return {
        deck: state.DeckReducers.deck,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deckAddAction: (deck, goBack) => dispatch(deckAddAction(deck, goBack)),
        deckFieldChangeAction: (field, value) => dispatch(deckFieldChangeAction(field, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckNewScreen)