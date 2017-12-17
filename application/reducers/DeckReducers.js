import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    decks: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DECK_FETCH:
            return {
                ...state,
                decks: { ...action.payload }
            }
        case types.DECK_ADD:
            return {
                ...state,
                decks: { ...state.decks, ...action.payload }
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
                },
            }
        default:
            return state
    }
}