import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Part_Drawer = ({report_Problem, closeDrawer}) => {
  return (
    <View
      style={{
        flex: 1,
        width: 340,
      }}>
      <View
        style={{
          paddingVertical: 30,
          paddingLeft: 40,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'black',
        }}>
        <View
          style={{
            borderRadius: 50,
            marginTop: 20,
          }}>
          {/* <Image
            source={require('../../assets/image/iconaplikasi.png')}
            style={{width: 100, height: 100}}
          /> */}
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontStyle: 'italic',
              color: 'white',
              fontWeight: '900',
            }}>
            Catatanku
          </Text>
        </View>
      </View>
      <View style={{paddingLeft: 40}}>
        <Content_drawer
          text={'Report a Problem'}
          icon="customerservice"
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}
          onPress={report_Problem}
        />
        <Content_drawer
          text={'About Aplication'}
          icon="flag"
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}
        />
      </View>
      <TouchableOpacity
        style={{position: 'absolute', bottom: 50, right: 20}}
        onPress={closeDrawer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginRight: 8,
              fontSize: 25,
              color: 'black',
              fontFamily: 'BebasNeue-Regular',
              letterSpacing: 1.3,
            }}>
            Close
          </Text>
          <Icon name="logout" size={40} color={'black'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Content_drawer = ({text, icon, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          style,
          {
            backgroundColor: '#D8605B',
            height: 46,
            width: '80%',
            borderRadius: 40,
            paddingLeft: 20,
            elevation: 10,
          },
        ]}>
        <Icon2 name={icon} size={25} color={'black'} />
        <Text
          style={{
            fontSize: 23,
            marginLeft: 18,
            color: 'black',
            letterSpacing: 1.3,
            fontFamily: 'BebasNeue-Regular',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Part_Drawer;
