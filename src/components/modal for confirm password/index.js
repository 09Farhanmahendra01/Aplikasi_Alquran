import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export default function Modal_for_confirm_password({isVisible, onPress}) {
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
            height: '43%',
            alignItems: 'center',
            padding: 12,
            borderRadius: 30,
          }}>
          <Image
            source={require('../../assets/icon/password.png')}
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
            please,equate confirm password with password..!!
          </Text>
          <TouchableOpacity onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 33,
                paddingVertical: 4,
                borderWidth: 2,
                marginTop: 40,
                backgroundColor: '#2992EE',
                borderRadius: 10,
              }}>
              <Text style={{color: 'black', letterSpacing: 1}}>Oke</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
