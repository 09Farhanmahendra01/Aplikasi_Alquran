import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import Surah from '../surah/index';
import Juz from '../Juz/index';
const Tab = createMaterialBottomTabNavigator();
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Bacaquran = () => {
  return (
    <Tab.Navigator screenOptions={{}} shifting={true} initialRouteName="surah">
      <Tab.Screen
        name="surah"
        component={Surah}
        options={{
          tabBarLabel: 'Surah',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <>
              <Image
                source={require('../../assets/icon/quran.png')}
                style={{
                  width: 37,
                  height: 37,
                  bottom: 0,
                  position: 'absolute',
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="juz"
        component={Juz}
        options={{
          tabBarLabel: 'Juz',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/icon/juz.png')}
              style={{
                width: 37,
                height: 37,
                bottom: 0,
                position: 'absolute',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bacaquran;
