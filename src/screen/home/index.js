import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', zIndex: 2, alignItems: 'center' }}>
                    <Image source={require('../../assets/image/quran.png')} style={{ width: 80, height: 80, }} />
                    <TouchableOpacity onPress={() => (this.props.navigation.navigate('Dashboard'))}>
                        <View style={{ marginTop: 30, borderWidth: 2, borderColor: 'white', alignItems: 'center', paddingHorizontal: 55, paddingVertical: 10, borderRadius: 20 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '900', letterSpacing: 1 }}>Baca Al-Quran</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={require('../../assets/image/kabah.jpg')} style={{ width: '100%', height: '100%' }} blurRadius={4} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})