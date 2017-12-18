import React, { Component } from 'react'
import { H1, H3, Text, Button, Input, Form, Item, Label } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { cardFieldChangeAction, cardAddAction } from '@actions/CardActions'

class CardNewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: `New Card`,
    })

    render() {
        const { card, cardFieldChangeAction, cardAddAction, navigation } = this.props
        const { goBack, state } = navigation
        const { title } = state.params

        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Form style={styles.input}>
                        <Item floatingLabel>
                            <Label>Question</Label>
                            <Input
                                onChangeText={(value) => cardFieldChangeAction('question', value)}
                                value={card.question}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Answer</Label>
                            <Input
                                onChangeText={(value) => cardFieldChangeAction('answer', value)}
                                value={card.answer}
                            />
                        </Item>
                    </Form>
                </View>
                <View style={styles.buttonContainer}>
                    <Button primary style={styles.button} block onPress={() => cardAddAction(title, card, goBack)}>
                        <Text> Submit </Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },    
    buttonContainer: {
        flex: 1,
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
        card: state.CardReducers.card,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardFieldChangeAction: (field, value) => dispatch(cardFieldChangeAction(field, value))
        , cardAddAction: (title, card, goBack) => dispatch(cardAddAction(title, card, goBack))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNewScreen)