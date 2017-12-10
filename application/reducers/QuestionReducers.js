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
            };
            break;
        case types.DECK_ADD:
            return {
                ...state,
                decks: { ...state.decks, ...action.payload }
            };
            break;
        case types.DECK_EDIT:
            return {
                ...state,
                decks: { ...state.decks, [action.title]: { ...action.payload } },
            };
            break;
    }
}