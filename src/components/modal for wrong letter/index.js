import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export default function Modal_for_wrong_letter({text, onPress, isVisible}) {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          zIndex: 2,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            height: '45%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
          }}>
          <Image
            source={require('../../assets/icon/decision.png')}
            style={{width: 100, height: 100}}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'red',
              marginTop: 10,
            }}>
            Registration Failed !!!
          </Text>
          <Text
            style={{
              fontSize: 17.5,
              marginTop: 25,
              color: 'black',
              fontWeight: '700',
              letterSpacing: 1,
              fontStyle: 'italic',
            }}>
            {text}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 40,
                paddingVertical: 4,
                borderWidth: 2,
                marginTop: 40,
                backgroundColor: '#2992EE',
                borderRadius: 10,
              }}>
              <Text
                style={{color: 'white', letterSpacing: 1, fontWeight: 'bold'}}>
                Oke
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
