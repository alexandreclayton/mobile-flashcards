import { combineReducers } from 'redux'

import DeckReducers from './DeckReducers'
import CardReducers from './CardReducers'
import QuizReducers from './QuizReducers'

export default combineReducers({ DeckReducers, CardReducers, QuizReducers })