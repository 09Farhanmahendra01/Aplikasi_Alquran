import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PerSurah = ({route, navigation}) => {
  // Variable Lokal
  const [loading, setLoading] = useState(false);
  const [nameSurah, setNameSurah] = useState();
  const [artiSurah, setArtiSurah] = useState();
  const [typeSurah, setTypeSurah] = useState();
  const [jumlahAyat, setJumlahAyat] = useState();
  const [numberSurah, setNumberSurah] = useState();
  const [daftarAyat, setDaftarAyat] = useState([]);
  // lifeCycle
  useEffect(() => {
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
        setArtiSurah(result.arti);
        setTypeSurah(result.tempat_turun);
        setJumlahAyat(result.jumlah_ayat);
        setNumberSurah(result.nomor);
        setDaftarAyat(result.ayat);
        setLoading(true);
      })
      .catch(error => console.log('erroraefsfe', error));
  }, []);
  //  Get Surah from API

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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.replace('Dashboard')}>
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
                  // backgroundColor: 'grey',
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
                  <Text style={{fontSize: 25, lineHeight: 40, color: 'white'}}>
                    {item.ar}
                  </Text>
                  <Text style={{marginTop: 10, color: '#ABAFD7'}}>
                    " {item.idn} "
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default PerSurah;
