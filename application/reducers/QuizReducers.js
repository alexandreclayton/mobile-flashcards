import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    questionCurrent: 1
    , questionCorrect: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DECK_FETCH:
            return {
                ...state,
                decks: { ...action.payload }
            };
        default:
            return state;
    }
}