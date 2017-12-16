import * as types from '@actions/ActionsTypes'


export const cardFieldChangeAction = (event) => {
    return {
        type: types.CARD_FIELD_CHANGE
        , field: event.target.name
        , payload: event.target.value
    }
}
