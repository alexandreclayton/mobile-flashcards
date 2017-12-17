
import React, { Component } from 'react'
import { Card, CardItem, H1, H2, H3, Text, Button } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import FlipperCard from '@components/FlipperCard'

class QuizScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `Quiz`,
    });

    render() {
        const { navigation, questionCurrent, questionCorrect } = this.props
        const { goBack, state } = navigation
        const { title, questions } = state.params
        const showResult = ((questionCurrent - 1) === questions.length)

        return (
            <View style={styles.card}>
                {showResult ? (
                    <View style={styles.result}>
                        <View style={styles.score}>
                            <H1>{`Correct: ${questionCorrect}`}</H1>
                            <H1>{`Total: ${questions.length}`}</H1>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button info style={styles.button} block onPress={() => null}>
                                <Text> Restart Quiz </Text>
                            </Button>
                            <Button primary style={styles.button} block onPress={() => null}>
                                <Text> Back to Deck </Text>
                            </Button>
                        </View>
                    </View>
                ) :
                    (<View style={styles.cardItem}>
                        <H3 style={styles.title}>{`Question ${questionCurrent} of ${questions.length}`}</H3>
                        <View style={styles.flipperContainer}>
                            <FlipperCard
                                question={questions[questionCurrent].question}
                                answer={questions[questionCurrent].answer}
                            />
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.textQuestion}>Swipe card to view answer</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button success style={styles.button} block onPress={() => null}>
                                <Text> Correct </Text>
                            </Button>
                            <Button danger style={styles.button} block onPress={() => null}>
                                <Text> Incorrect </Text>
                            </Button>
                        </View>
                    </View>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 10
    },
    card: {
        flex: 1
    },
    cardItem: {
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1
    },
    result: {
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1
    },
    score: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flipperContainer: {
        flex: 4,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    textQuestion: {
        color: 'red'
    },
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#f4f6f9',
    },
    button: {
        margin: 15,
    },
});

function mapStateToProps(state) {
    return {
        questionCurrent: state.QuizReducers.questionCurrent,
        questionCorrect: state.QuizReducers.questionCorrect,
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDecksAction: decks => dispatch(fetchDecksAction(decks))
    }
}
*/

export default connect(mapStateToProps)(QuizScreen)