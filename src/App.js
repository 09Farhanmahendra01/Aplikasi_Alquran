import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './router/index'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})