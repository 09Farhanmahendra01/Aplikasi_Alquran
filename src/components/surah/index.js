import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Surah extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Coming Soon</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})