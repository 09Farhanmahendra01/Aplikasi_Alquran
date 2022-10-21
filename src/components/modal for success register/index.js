import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default function Modal_for_success_register({isVisible, onPress}) {
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
              paddingHorizontal: 1,
              borderRadius: 100,
              marginTop: 30,
            }}>
            <Icon name="checkcircle" size={80} color={'green'} />
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{fontFamily: 'Poppins-BoldItalic', fontSize: 30}}>
              Success!
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 3,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {' '}
              Congratulations,
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              your data has been registered
            </Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <View
              style={{
                borderWidth: 2,
                paddingHorizontal: 60,
                paddingVertical: 4,
                borderColor: 'green',
                marginTop: 35,
                borderRadius: 50,
              }}>
              <Text style={{color: 'green', fontSize: 16, fontWeight: '800'}}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
