import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardItem, H1, H3, Text, Button } from 'native-base'
import { StyleSheet, Alert, View } from 'react-native'

class DeckDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: `Deck Detail`,
    })

    render() {

        let { title } = this.props.navigation.state.params;
        const deck = this.props.decks[title];
        const questions = deck && deck.questions;
        const lenQuestions = questions.length;

        return (
            <View style={styles.container}>
                <View style={styles.detailContainer}>
                    <H1 style={styles.deckName}> {deck.title} </H1>
                    <H3 style={styles.cardCount}> {`${lenQuestions} card(s)`}</H3>
                </View>
                <View style={styles.btnContainer}>
                    <Button info style={styles.button} block onPress={() => this.props.navigation.navigate('CardNewScreen', deck)}>
                        <Text> Add Card </Text>
                    </Button>
                    {
                        (lenQuestions > 0) && (<Button primary style={styles.button} block onPress={() => this.props.navigation.navigate('QuizScreen', deck)}>
                            <Text> Start Quiz </Text>
                        </Button>)
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1
    },
    deckName: {
        marginBottom: 20,
    },
    detailContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f4f6f9',
    },
    button: {
        margin: 15,
    }
});

function mapStateToProps(state) {
    return {
        decks: state.DeckReducers.decks,
    }
}

export default connect(mapStateToProps)(DeckDetailScreen);