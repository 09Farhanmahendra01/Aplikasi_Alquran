import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {Component, useContext, useEffect} from 'react';
import {Usercontext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home({navigation}) {
  const {data_asyncStorage} = useContext(Usercontext);
  const [data, setData] = data_asyncStorage;

  useEffect(() => {
    get_data();
  }, []);

  const get_data = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      value = JSON.parse(value);
      if (value != null) {
        setData(value);
        console.log(value);
      }
    } catch (error) {
      console.log('Get Data', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          marginTop: '10%',
          marginLeft: '3%',
        }}>
        {data.map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Hallo {item.nama} ,
            </Text>
          );
        })}
        <Text style={{color: 'white', fontSize: 16.5}}>
          Selamat datang di Al-Quran Digital
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          alignItems: 'center',
          width: '100%',
          marginTop: '50%',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/image/quran.png')}
            style={{width: 80, height: 80}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <View
              style={{
                marginTop: 30,
                borderWidth: 2.5,
                borderColor: 'white',
                alignItems: 'center',
                paddingHorizontal: 55,
                paddingVertical: 10,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '900',
                  letterSpacing: 1,
                }}>
                Baca Al-Quran
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/image/kabah.jpg')}
        style={{width: '100%', height: '100%'}}
        blurRadius={2.5}
      />
    </View>
  );
}

export default Home;
