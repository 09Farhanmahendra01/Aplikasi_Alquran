import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';
import {Usercontext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';
import Part_Drawer from '../Drawer';

const Surah = ({navigation}) => {
  // Variable Lokal
  const [surah, setSurah] = useState([]);
  const [kondisi, setKondisi] = useState(true);
  const [kondisi2, setKondisi2] = useState();
  const [remember, setRemember] = useState();
  const tes = remember;
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
        get_Remember();
        setKondisi(false);
      })
      .catch(error => console.log('error', error));
  };
  // get data from API
  const get_Remember = async () => {
    try {
      let value = await AsyncStorage.getItem('Pengingat');
      value = JSON.parse(value);
      if (value == '' || value == null) {
        setKondisi2(false);
      } else if (value != null) {
        setRemember(value);
        setKondisi2(true);
      }
    } catch (e) {
      console.log('error While get Remember', e);
    }
  };
  // Drawer
  const refdrawer = useRef(null);
  const Drawer = () => {
    return (
      <View>
        <Text>sjdlksjdlsj</Text>
      </View>
    );
  };
  return kondisi ? (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#D5CFCF'}}>
      <AnimatedLottieView
        source={require('../../assets/lottie/loadingbacaquran.json')}
        loop={true}
        autoPlay={true}
        style={{width: '65%', height: '65%', marginLeft: '5%'}}
      />
      <Text
        style={{
          position: 'absolute',
          top: '62%',
          left: '30%',
          fontSize: 15,
          fontWeight: '700',
        }}>
        Mohon Tunggu Sebentar...
      </Text>
    </View>
  ) : (
    <DrawerLayoutAndroid ref={refdrawer} renderNavigationView={Drawer}>
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
          <TouchableOpacity onPress={() => refdrawer.current.openRefdrawer()}>
            <Image
              source={require('../../assets/icon/drawer.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: '#672CBC',
            }}>
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
              left: 20,
              top: 70,
            }}>
            {kondisi2 ? (
              <>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 18,
                    color: 'white',
                    letterSpacing: 1,
                  }}>
                  {tes.namaSurat}
                </Text>
                <Text style={{fontFamily: 'Poppins-Regular', color: 'white'}}>
                  ayat {tes.Ayat}
                </Text>
              </>
            ) : (
              <View></View>
            )}
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
    </DrawerLayoutAndroid>
  );
};

export default Surah;
