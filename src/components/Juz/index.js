import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Quran from '../../database';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const Juz = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: '#F0E8E8',
        }}>
        <Component_perjuz
          nomer={1}
          keteranganSurah="Al-Fatihah Ayat 1"
          Juz={1}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 1,
            });
          }}
        />
        <Component_perjuz
          nomer={2}
          keteranganSurah="Al-Baqarah Ayat 142"
          Juz={2}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 2,
            });
          }}
        />
        <Component_perjuz
          nomer={3}
          keteranganSurah="Al-Baqarah Ayat 253"
          Juz={3}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 3,
            });
          }}
        />
        <Component_perjuz
          nomer={4}
          keteranganSurah="Ali 'Imran Ayat 92"
          Juz={4}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 4,
            });
          }}
        />
        <Component_perjuz
          nomer={5}
          keteranganSurah="An-Nisa Ayat 24"
          Juz={5}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 5,
            });
          }}
        />
        <Component_perjuz
          nomer={6}
          keteranganSurah="An-Nisa Ayat 148"
          Juz={6}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 6,
            });
          }}
        />
        <Component_perjuz
          nomer={7}
          keteranganSurah="Al-Maidah Ayat 83"
          Juz={7}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 7,
            });
          }}
        />
        <Component_perjuz
          nomer={8}
          keteranganSurah="Al-An'am Ayat 111"
          Juz={8}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 8,
            });
          }}
        />
        <Component_perjuz
          nomer={9}
          keteranganSurah="Al-A'raf Ayat 88"
          Juz={9}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 9,
            });
          }}
        />
        <Component_perjuz
          nomer={10}
          keteranganSurah="Al-Anfal Ayat 41"
          Juz={10}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 10,
            });
          }}
        />
        <Component_perjuz
          nomer={11}
          keteranganSurah="At-Taubah Ayat 94"
          Juz={11}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 11,
            });
          }}
        />
        <Component_perjuz
          nomer={12}
          keteranganSurah="Hud Ayat 6"
          Juz={12}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 12,
            });
          }}
        />
        <Component_perjuz
          nomer={13}
          keteranganSurah="Yusuf Ayat 53"
          Juz={13}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 13,
            });
          }}
        />
        <Component_perjuz
          nomer={14}
          keteranganSurah="Al-Hijr Ayat 2"
          Juz={14}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 14,
            });
          }}
        />
        <Component_perjuz
          nomer={15}
          keteranganSurah="Al-Isra Ayat 1"
          Juz={15}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 15,
            });
          }}
        />
        <Component_perjuz
          nomer={16}
          keteranganSurah="Al-Kahf Ayat 75"
          Juz={16}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 16,
            });
          }}
        />
        <Component_perjuz
          nomer={17}
          keteranganSurah="Al-Anbiya' Ayat 1"
          Juz={17}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 17,
            });
          }}
        />
        <Component_perjuz
          nomer={18}
          keteranganSurah="Al-Mu'Minun Ayat 1"
          Juz={18}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 18,
            });
          }}
        />
        <Component_perjuz
          nomer={19}
          keteranganSurah="Al-Furqan Ayat 21"
          Juz={19}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 19,
            });
          }}
        />
        <Component_perjuz
          nomer={20}
          keteranganSurah="Al-Naml Ayat 60"
          Juz={20}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 20,
            });
          }}
        />
        <Component_perjuz
          nomer={21}
          keteranganSurah="Al-Ankabut Ayat 45"
          Juz={21}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 21,
            });
          }}
        />
        <Component_perjuz
          nomer={22}
          keteranganSurah="Al-Ahzab Ayat 31"
          Juz={22}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 22,
            });
          }}
        />
        <Component_perjuz
          nomer={23}
          keteranganSurah="Ya-sin Ayat 32"
          Juz={23}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 23,
            });
          }}
        />
        <Component_perjuz
          nomer={24}
          keteranganSurah="Az-Zumar Ayat 32"
          Juz={24}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 24,
            });
          }}
        />
        <Component_perjuz
          nomer={25}
          keteranganSurah="Fussilat Ayat 47"
          Juz={25}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 25,
            });
          }}
        />
        <Component_perjuz
          nomer={26}
          keteranganSurah="Al-Ahqaf Ayat 1"
          Juz={26}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 26,
            });
          }}
        />
        <Component_perjuz
          nomer={27}
          keteranganSurah="Az-Zariyat Ayat 31"
          Juz={27}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 27,
            });
          }}
        />
        <Component_perjuz
          nomer={28}
          keteranganSurah="Al-Mujadalah Ayat 1"
          Juz={28}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 28,
            });
          }}
        />
        <Component_perjuz
          nomer={29}
          keteranganSurah="Al-Mulk Ayat 1"
          Juz={29}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 29,
            });
          }}
        />
        <Component_perjuz
          nomer={30}
          keteranganSurah="Al-Naba' Ayat 1"
          Juz={30}
          onPress={() => {
            navigation.navigate('kumpulanjuz', {
              nomer_Juz: 30,
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

const Component_perjuz = ({nomer, keteranganSurah, Juz, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 10,
          borderBottomWidth: 0.5,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{position: 'absolute', fontSize: 16, fontWeight: '900'}}>
            {nomer}
          </Text>
          <Image
            source={require('../../assets/icon/bingkai.png')}
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={{justifyContent: 'center', marginLeft: 13}}>
          <Text
            style={{
              color: '#DA8856',
              fontSize: 18,
              fontFamily: 'Poppins-Bold',
            }}>
            Juz : {Juz}
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: '#091945',
              fontSize: 15,
              fontWeight: '700',
              fontStyle: 'italic',
            }}>
            Di Awali Dari : {keteranganSurah}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Juz;
