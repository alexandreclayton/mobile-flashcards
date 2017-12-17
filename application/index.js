import React, { Component } from 'react'
import { setLocalNotification } from '@api/NotificationsApi'
import { AppLoading } from 'expo'

import Route from '@routes'

export default class App extends Component {

  state = {
    isLoading: true
  }

  async loadResource() {
    await Promise.all(
      [
        setLocalNotification()
      ]
    )
  }

  render() {
    
    const { isLoading } = this.state;

    return isLoading ? (
      <AppLoading
        startAsync={this.loadResource}
        onFinish={() => this.setState({ isLoading: false })}
        onError={console.warn}
      />) : (
        <Route />
      )
  }
}