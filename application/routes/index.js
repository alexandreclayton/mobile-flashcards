import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@store'
import { AppNavigator } from '@routes/Routes'


export default Route = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)