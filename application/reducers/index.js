import { combineReducers } from 'redux'

import DeckReducers from './DeckReducers'
import CardReducers from './CardReducers'

export default combineReducers({ DeckReducers, CardReducers })