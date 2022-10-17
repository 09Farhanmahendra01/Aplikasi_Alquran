import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import AnimatedLottieView from 'lottie-react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('login');
    }, 3000);
  }
  render() {
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
}

const styles = StyleSheet.create({});
