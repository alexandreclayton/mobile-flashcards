import * as types from '@actions/ActionsTypes'

const INITIAL_STATE = {
    questionCurrent: 0
    , questionCorrect: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.QUIZ_ON_CORRECT:
            return {
                ...state,
                questionCurrent: (state.questionCurrent + 1),
                questionCorrect: (state.questionCorrect + 1)
            }
        case types.QUIZ_ON_INCORRECT:
            return {
                ...state,
                questionCurrent: (state.questionCurrent + 1)
            }
        case types.QUIZ_ON_RESTART:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}