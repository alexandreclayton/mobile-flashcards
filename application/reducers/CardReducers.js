import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    card: {
        answer: '',
        question: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CARD_FIELD_CHANGE:
            return {
                ...state,
                card: { ...state.card, [action.field]: action.payload }
            }
        case types.CARD_CLEAN:
            return { ...INITIAL_STATE }
        default:
            return state
    }
}