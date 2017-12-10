import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import Reducers from '@reducers'


export const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk, logger))