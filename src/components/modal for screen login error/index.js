import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/Entypo';

const Modal_for_screen_login = ({
  isVisible,
  onPress_close,
  deskirpsi_modal,
}) => {
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
            borderRadius: 40,
          }}>
          <View
            style={{
              backgroundColor: 'red',
              paddingHorizontal: 1,
              borderRadius: 100,
              marginTop: 30,
            }}>
            <Icon name="cross" size={80} color={'white'} />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{fontFamily: 'Poppins-BoldItalic', fontSize: 30}}>
              Error!
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 3,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Oops!</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 2}}>
              {deskirpsi_modal}
            </Text>
          </View>
          <TouchableOpacity onPress={onPress_close}>
            <View
              style={{
                borderWidth: 2,
                paddingHorizontal: 60,
                paddingVertical: 4,
                borderColor: '#CF3421',
                marginTop: 35,
                borderRadius: 50,
              }}>
              <Text style={{color: '#CF3421', fontSize: 16, fontWeight: '800'}}>
                Close
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Modal_for_screen_login;
