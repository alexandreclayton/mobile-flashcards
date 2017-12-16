import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    card: {
        question: '',
        answer: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARD_FIELD_CHANGE:
            return {
                ...state,
                card: { [action.field]: action.payload }
            };
            break;

    }
}