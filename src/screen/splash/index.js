import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component, useEffect, useContext} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Usercontext} from '../../router';

function Splash({navigation}) {
  const {data_asyncStorage} = useContext(Usercontext);
  const [data, setData] = data_asyncStorage;

  React.useEffect(() => {
    setTimeout(() => {
      get_data();
    }, 3700);
  }, []);

  const get_data = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      value = JSON.parse(value);
      if (value != null) {
        setData(value);
        console.log(value);
        navigation.replace('home');
      } else if (value == null) {
        navigation.replace('home');
      }
    } catch (error) {
      console.log('Get Data', error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/image/quran.png')}
          style={{width: 100, height: 100}}
        />
        <Text
          style={{
            fontSize: 25,
            fontStyle: 'italic',
            fontWeight: 'bold',
            marginTop: 20,
            color: 'black',
            fontFamily: 'Poppins-ExtraBold',
          }}>
          AL-Quran Digital
        </Text>
      </View>
      <AnimatedLottieView
        source={require('../../assets/lottie/loading.json')}
        loop={true}
        autoPlay={true}
        style={{marginTop: '80%'}}
      />
    </View>
  );
}
export default Splash;
const styles = StyleSheet.create({});
