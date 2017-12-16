import React, { Component } from 'react'
import { Card, CardItem, H1, H3, Text, Button, Input, Form, Item, Label } from 'native-base'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native'

class CardNewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: `New Card`,
    })

    render() {
        return (
            <Card behavior={'padding'} style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <View style={styles.infoContainer}>
                        <Form style={styles.input}>
                            <Item floatingLabel>
                                <Label>Question</Label>
                                <Input
                                    onChangeText={(question) => this.setState({ question })}
                                    value={this.state.question}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Answer</Label>
                                <Input
                                    onChangeText={(answer) => this.setState({ answer })}
                                    value={this.state.answer}
                                />
                            </Item>
                        </Form>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button primary style={styles.button} block onPress={this.handleSubmit}>
                            <Text> Submit </Text>
                        </Button>
                    </View>
                </CardItem>
            </Card>
        );

    }

}

NewCard.navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Card'
});

const styles = StyleSheet.create({
    card: {
        flex: 1
    },
    cardItem: {
        alignItems: 'stretch',
        flexDirection: 'column',
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
});

function mapStateToProps(state) {
    return {
        decks: state.DeckReducers.decks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardFieldChangeAction: event => dispatch(cardFieldChangeAction(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNewScreen);