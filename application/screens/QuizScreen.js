
import React, { Component } from 'react'
import { Card, CardItem, H1, H3, Text, Button } from 'native-base'
import { StyleSheet, View } from 'react-native'

class QuizScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `Quiz`,
    });

    render() {
        const { navigation } = this.props
        const { goBack, state } = navigation
        const { title } = state.params

        return (
            <Card behavior={'padding'}>
                <CardItem style={styles.cardItem}>
                    <View style={styles.infoContainer}>
                        <H1>as asdadghaga</H1>
                    </View>
                </CardItem>
            </Card>
        )
    }

}