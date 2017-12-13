import * as types from '@actions/ActionsTypes'

export const fetchDecksAction = (decks) => {
    return {
        type: types.DECK_FETCH
        , payload: decks
    }
};