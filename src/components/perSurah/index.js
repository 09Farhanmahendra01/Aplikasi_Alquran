import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Usercontext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';
import Sound from 'react-native-sound';

const PerSurah = ({route, navigation}) => {
  // Variable Lokal
  const [forSave, setForSave] = useState({
    namaSurat: '',
    Ayat: '',
  });
  const [playing, setPlaying] = useState(true);
  const [audioSurah, setAudioSurah] = useState();
  const [loading, setLoading] = useState(false);
  const [nameSurah, setNameSurah] = useState();
  const [artiSurah, setArtiSurah] = useState();
  const [typeSurah, setTypeSurah] = useState();
  const [jumlahAyat, setJumlahAyat] = useState();
  const [numberSurah, setNumberSurah] = useState();
  const [nampungNamaSurah, setNampungNamaSurah] = useState();
  const [daftarAyat, setDaftarAyat] = useState([]);
  // lifeCycle
  useEffect(() => {
    get_surah();
  }, []);

  // get Surah from API
  const get_surah = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://equran.id/api/surat/${route.params.numberSurah}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setNameSurah(result.nama_latin);
        setNampungNamaSurah(result.nama_latin);
        setArtiSurah(result.arti);
        setTypeSurah(result.tempat_turun);
        setJumlahAyat(result.jumlah_ayat);
        setNumberSurah(result.nomor);
        setDaftarAyat(result.ayat);
        setAudioSurah(result.audio);
        setLoading(true);
      })
      .catch(error => console.log('erroraefsfe', error));
  };
  const showToast = () => {
    ToastAndroid.show('Telah Tersimpan', ToastAndroid.SHORT);
  };
  // save Remember Surah
  const save_Remember = async data => {
    try {
      await AsyncStorage.setItem('Pengingat', JSON.stringify(data));
    } catch (e) {
      console.log('Error While save Remember', e);
    }
  };
  // Sound Surah
  Sound.setCategory('Playback');
  let audio = new Sound(`${audioSurah}`, null, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        audio.getDuration() +
        ' number of channels: ' +
        audio.getNumberOfChannels(),
    );
  });
  const PlayRemoteURLSoundFile = () => {
    if (audio.isPlaying()) {
      audio.pause();
      // setPlaying(true);
    } else {
      // setPlaying(false);
      audio.play(success => {
        if (success) {
          // setPlaying(true);
          console.log('successfully finished playing');
        } else {
          setPlaying(true);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };
  return loading ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar hidden={true} />
      <View
        style={{
          flex: 1,
          paddingVertical: 15,
          paddingHorizontal: 15,
          backgroundColor: '#091945',
        }}>
        {/* Bagian Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 18,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              audio.stop();
              navigation.replace('Dashboard', {
                routeName: 'surah',
              });
            }}>
            <Icon name="arrow-back-outline" size={30} color={'white'} />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              width: '85%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-BoldItalic',
                fontSize: 28,
                color: 'white',
              }}>
              {nameSurah}
            </Text>
          </View>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => PlayRemoteURLSoundFile()}>
            <Icon name={'md-play-circle-outline'} size={35} color={'white'} />
          </TouchableOpacity>
        </View>

        {/* Bagian bingkai */}
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'yellow',
          }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              top: 8,
            }}>
            <Text style={{position: 'absolute', zIndex: 3, fontWeight: '800'}}>
              {numberSurah}
            </Text>
            <Image
              source={require('../../assets/icon/bingkai2.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          {/* Bagian Deskripsi */}
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              top: 63,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Bold'}}>
              {nameSurah}
            </Text>
            <Text style={{fontWeight: '700', fontStyle: 'italic'}}>
              {artiSurah}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{typeSurah} / </Text>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {jumlahAyat} Ayat
              </Text>
            </View>
          </View>

          {/* Bagian BackGround AlQuran*/}
          <Image
            source={require('../../assets/icon/Card.png')}
            style={{width: '90%', height: 160, borderRadius: 20}}
          />
        </View>
        {route.params.numberSurah == 9 ? (
          <View></View>
        ) : (
          <View
            style={{
              zIndex: 2,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Image
              source={require('../../assets/icon/bismillah.png')}
              style={{width: '90%', height: 60}}
            />
          </View>
        )}
        {/* Bagian Ayat */}
        <View
          style={{
            marginTop: 20,
            // backgroundColor: 'red',
          }}>
          {daftarAyat.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  marginBottom: 10,
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{position: 'absolute', color: 'white'}}>
                    {item.nomor}
                  </Text>
                  <Image
                    source={require('../../assets/icon/bingkai.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingHorizontal: 5,
                    width: 300,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      showToast();
                      forSave.namaSurat = nampungNamaSurah;
                      forSave.Ayat = item.nomor;
                      setForSave(forSave);
                      save_Remember(forSave);
                    }}>
                    <Image
                      source={require('../../assets/icon/save.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginBottom: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 25,
                      lineHeight: 40,
                      color: 'white',
                      letterSpacing: 1,
                    }}>
                    {item.ar}
                  </Text>
                  <Text style={{marginTop: 10, color: '#ABAFD7'}}>
                    {item.idn}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  ) : (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#D5CFCF'}}>
      <AnimatedLottieView
        source={require('../../assets/lottie/loadingbacaquran.json')}
        loop={true}
        autoPlay={true}
        style={{width: '65%', height: '65%', marginLeft: '2%'}}
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
  );
};

export default PerSurah;
