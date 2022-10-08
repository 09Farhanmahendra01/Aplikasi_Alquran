import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import KetSurah from '../ket.Surah/index'
import Surah from '../surah/index'
import Juz from '../Juz/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


export default class Bacaquran extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='ketsurah'
            >
                <Tab.Screen name="ketsurah" component={KetSurah} options={{
                    tabBarLabel: 'keterangan Surah',
                }} />
                <Tab.Screen name="surah" component={Surah} options={{
                    tabBarLabel: 'Surah'
                }} />
                <Tab.Screen name="juz" component={Juz} options={{
                    tabBarLabel: 'Juz'
                }} />
            </Tab.Navigator>
        )
    }
}

