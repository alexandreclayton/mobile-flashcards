import * as types from '@actions/ActionsTypes'
import { Alert } from 'react-native'

export const onCorrect = () => {
    return {
        type: types.QUIZ_ON_CORRECT
    }
}

export const onInCorrect = () => {
    return {
        type: types.QUIZ_ON_INCORRECT
    }
}

export const onRestart = () => {
    return {
        type: types.QUIZ_ON_RESTART
    }
}