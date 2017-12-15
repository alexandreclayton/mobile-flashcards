import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    card: {
        question: '',
        answer: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DECK_FETCH:
            return {
                ...state,
                decks: { ...action.payload }
            };
            break;

    }
}