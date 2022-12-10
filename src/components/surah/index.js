import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';

const Surah = ({navigation}) => {
  // Variable Lokal
  const [surah, setSurah] = useState([]);
  const [kondisi, setKondisi] = useState(true);
  // LifeCycle
  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      get_Surah();
      return refresh;
    });
  }, [navigation]);
  // Get data from API
  const get_Surah = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://equran.id/api/surat', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setSurah(result);
        setKondisi(false);
      })
      .catch(error => console.log('error', error));
  };
  return kondisi ? (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        // flex: 1,
        backgroundColor: '#F0E8E8',
        paddingHorizontal: 10,
        paddingVertical: 20,
        // backgroundColor: '#091945',
      }}>
      {/* Bagian header */}
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icon/drawer.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 20, color: '#672CBC'}}>
          Al-Quran Digital
        </Text>
        <TouchableOpacity>
          <Icon name="search" size={23} />
        </TouchableOpacity>
      </View>
      {/* Bagian Terakhir Membaca */}
      <View style={{marginVertical: 25}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            left: 10,
            top: 20,
            zIndex: 2,
          }}>
          <Image
            source={require('../../assets/icon/cib.png')}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Poppins-Medium',
              color: 'white',
            }}>
            Terakhir Membaca
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            zIndex: 2,
            left: 40,
            top: 70,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: 'white',
              letterSpacing: 1,
            }}>
            Al fatihah
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular', color: 'white'}}>
            ayat 1
          </Text>
        </View>
        <Image
          source={require('../../assets/icon/Frame30.png')}
          style={{width: '100%', height: 150}}
        />
      </View>
      <StatusBar hidden={true} />

      {surah.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.replace('persurah', {
                numberSurah: item.nomor,
              });
            }}
            key={index}
            style={{
              flexDirection: 'row',
              marginBottom: 15,
              borderBottomWidth: 0.2,
              paddingBottom: 10,
              alignItems: 'center',
            }}>
            {/* Bagian bingkai dan nomor */}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  position: 'absolute',
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                {item.nomor}
              </Text>
              <Image
                source={require('../../assets/icon/bingkai.png')}
                style={{width: 55, height: 55}}
              />
            </View>
            {/* Bagian Deskripsi */}
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <View>
                <Text
                  style={{
                    marginBottom: 2,
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  {item.nama_latin}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#8789A3', fontWeight: '900'}}>
                    {item.tempat_turun} |{' '}
                  </Text>
                  <Text style={{color: '#8789A3', fontWeight: '900'}}>
                    {item.jumlah_ayat} Ayat
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#863ED5',
                  }}>
                  {item.nama}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Surah;
