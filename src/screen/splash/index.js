import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('login');
        }, 3000)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/image/quran.png')} style={{ width: 100, height: 100 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, color: 'black', fontFamily: 'Poppins-ExtraBold' }}>AL-Quran Digital</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})