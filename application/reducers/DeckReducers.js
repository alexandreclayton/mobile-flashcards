import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    decks: {},
    deck: {
        title: '',
        questions: []
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DECK_FIELD_CHANGE:
            return {
                ...state,
                deck: { ...state.deck, [action.field]: action.payload }
            }
        case types.DECK_FETCH:
            return {
                ...state,
                decks: { ...action.payload }
            }
        case types.DECK_ADD:
            return {
                ...state,
                decks: { ...state.decks, [state.deck.title]: { ...state.deck } }
            }
        case types.DECK_CLEAN:
            return {
                ...state,
                deck: { ...state.deck, ...INITIAL_STATE.deck }
            }
        case types.DECK_EDIT:
            return {
                ...state,
                decks: { ...state.decks, [action.title]: { ...action.payload } },
            }
        case types.DECK_ADD_QUESTION:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.title]: {
                        ...state.decks[action.title],
                        questions: [...state.decks[action.title].questions, action.payload]
                    }
                }
            }
        default:
            return state
    }
}