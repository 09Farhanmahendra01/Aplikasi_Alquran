import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Modal from 'react-native-modal';
import {Usercontext} from '../../router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  // from variable global
  const {username_user, password_user, name_user, data_asyncStorage} =
    useContext(Usercontext);
  const [name, setName] = name_user;
  const [username, setUsername] = username_user;
  const [password, setPassword] = password_user;
  const [data, setData] = data_asyncStorage;
  // variable Lokal
  const [tes, setTes] = useState(false);
  const compUsername = useRef(null);
  const compPassword = useRef(null);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [kondisi, setKondisi] = useState(true);
  // inputan user
  const [emailUser, setEmailUser] = useState();
  const [passwordUser, setPasswordUser] = useState();
  // bagian function
  useEffect(() => {
    get_data();
  }, []);
  function rulesSignIn() {
    data.map(item => {
      if (item.Username == emailUser && item.password == passwordUser) {
        navigation.replace('home');
      } else {
        setModal(true);
      }
    });
  }
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
  useEffect(() => {
    Keyboard.addListener('keyboardWillChangeFrame', () => {
      compUsername.current.blur();
    });
  });

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: '#19A1A9',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/icon/user.png')}
          style={{width: 100, height: 100}}
        />
        <Text
          style={{
            fontFamily: 'Poppins-BoldItalic',
            color: 'white',
            marginTop: 30,
            fontSize: 23,
          }}>
          Log in to your Account
        </Text>
        <Text style={{fontSize: 15, color: 'white', letterSpacing: 2}}>
          Welcome back, please enter your details.
        </Text>
      </View>
      <View style={{marginTop: 40}}>
        <Inputan
          Ref={compUsername}
          text="Username"
          onChangeText={val => setEmailUser(val)}
          style2={{
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: 'white',
            paddingHorizontal: 20,
          }}
          onEndEditing={() => {
            if (tes == true) {
              compPassword.current.blur();
            } else if (tes == false) {
              compPassword.current.focus();
            }
          }}
        />
        <Inputan
          Ref={compPassword}
          text="Password"
          scr={kondisi}
          img={require('../../assets/icon/mata.png')}
          icon="eye"
          onPress={() => setKondisi(!kondisi)}
          onChangeText={item => setPasswordUser(item)}
          style={{
            borderWidth: 2,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingLeft: 20,
          }}
          style2={{width: '90%'}}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 50, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            setLogin(true);
            setTimeout(() => {
              rulesSignIn();
              setLogin(false);
            }, 1700);
          }}>
          <View
            style={{
              backgroundColor: '#E1C32D',
              width: 200,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-BoldItalic',
                color: 'white',
              }}>
              {login ? (
                <ActivityIndicator size={'large'} color="white" />
              ) : (
                'Login'
              )}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('register');
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-BoldItalic',
                color: 'black',
              }}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* part modal */}
      <Modal
        isVisible={modal}
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
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Something Went Wrong!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModal(false);
            }}>
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
}

function Inputan(props) {
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          marginBottom: 7,
          letterSpacing: 1.5,
          fontWeight: '800',
        }}>
        {props.text}
      </Text>
      <View style={props.style}>
        <TextInput
          textAlign="left"
          ref={props.Ref}
          secureTextEntry={props.scr}
          style={props.style2}
          onChangeText={props.onChangeText}
          onEndEditing={props.onEndEditing}
        />
        <TouchableOpacity onPress={props.onPress}>
          <View style={{zIndex: 2}}>
            <Icon name={props.icon} size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
