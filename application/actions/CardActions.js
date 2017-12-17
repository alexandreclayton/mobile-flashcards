import * as types from '@actions/ActionsTypes'
import { Alert } from 'react-native'
import * as StorageApi from '@api/StorageApi'

export const cardFieldChangeAction = (field, value) => {
    return {
        type: types.CARD_FIELD_CHANGE
        , field: field
        , payload: value
    }
}

export const cardAddAction = (title, card, goBack) => {
    return dispatch => {

        let { answer, question } = card

        if (question === '') {
            Alert.alert('Mandatory', 'Question cannot be empty')
            return
        }
        if (answer === '') {
            Alert.alert('Mandatory', 'Answer cannot be empty')
            return
        }

        dispatch({ type: types.CARD_CLEAN })
        dispatch({
            type: types.DECK_ADD_QUESTION
            , title: title
            , payload: card
        })

        StorageApi.addCardToDeck(title, card)

        Alert.alert('Successful', 'Question Added Successfully',
            [
                {
                    text: 'OK', onPress: (title) => goBack()
                }
            ])
    }
}
