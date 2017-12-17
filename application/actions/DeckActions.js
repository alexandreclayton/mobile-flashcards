import * as types from '@actions/ActionsTypes'
import { Alert } from 'react-native'
import * as StorageApi from '@api/StorageApi'

export const deckFieldChangeAction = (field, value) => {
    return {
        type: types.DECK_FIELD_CHANGE
        , field: field
        , payload: value
    }
}

export const fetchDecksAction = (decks) => {
    return {
        type: types.DECK_FETCH
        , payload: decks
    }
}

export const deckAddAction = (deck, goBack) => {
    return dispatch => {

        let { title } = deck

        if (title === '') {
            Alert.alert('Mandatory', 'Deck title cannot be empty')
            return
        }

        dispatch({ type: types.DECK_ADD })
        dispatch({ type: types.DECK_CLEAN })

        StorageApi.addDeck(deck)

        Alert.alert('Successful', 'Deck Added Successfully',
            [
                {
                    text: 'OK', onPress: () => goBack()
                }
            ])
    }
}

export const deckAddClean = () => {
    return {
        type: types.DECK_CLEAN
    }
}