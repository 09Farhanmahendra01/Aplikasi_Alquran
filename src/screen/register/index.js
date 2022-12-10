import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Usercontext} from '../../router';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';

import Modal_empty_form from '../../components/modal for empty form';
import Modal_for_success_register from '../../components/modal for success register';
import Modal_for_wrong_letter from '../../components/modal for wrong letter';
import Modal_for_confirm_password from '../../components/modal for confirm password';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({navigation}) {
  const compUsername = useRef(null);
  const compPassword = useRef(null);
  const compConfirmPassword = useRef(null);
  const [modalconfirmpw, setModalconfirmpw] = useState(false);
  const [textmodalletter, setTextmodalletter] = useState('');
  const [modalwrongletter, setModalwrongletter] = useState(false);
  const [modalformkosong, setModalformkosong] = useState(false);
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [kondisi, setKondisi] = useState(true);
  const [kondisi2, setKondisi2] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState('');
  // Cek Form
  const [cek_nama, setCek_nama] = useState('');
  const [cek_username, setCek_username] = useState('');
  const [cek_password, setCek_password] = useState('');
  // Variable Global
  const {name_user, username_user, password_user, data_asyncStorage} =
    useContext(Usercontext);
  const [name, setName] = name_user;
  const [username, setUsername] = username_user;
  const [password, setPassword] = password_user;
  const [data, setData] = data_asyncStorage;
  // Function
  useEffect(() => {}, []);
  const cekForm = () => {
    let name2 = String(cek_nama);
    let username2 = String(cek_username);
    let password2 = String(cek_password);
    let cfrmpassword = String(confirmpassword);
    const formkosong = () => {
      if (
        name2 == '' ||
        username2 == '' ||
        password2 == '' ||
        cfrmpassword == ''
      ) {
        setModalformkosong(true);
      } else {
        Jumlah_kata();
      }
    };
    const Jumlah_kata = () => {
      if (name2.length < 5) {
        setModalwrongletter(true);
        setTextmodalletter('Buatlah Nama lebih dari 4 huruf..!!!');
      } else if (username2.length < 3) {
        setModalwrongletter(true);
        setTextmodalletter('Buatlah Username lebih dari 4 huruf..!!!');
      } else if (password2.length < 5) {
        setModalwrongletter(true);
        setTextmodalletter('Buatlah Password lebih dari 4 huruf..!!!');
      } else {
        confirmPW();
      }
    };
    const confirmPW = () => {
      if (cfrmpassword != password2) {
        setModalconfirmpw(true);
      } else {
        add_data();
        setModal(true);
      }
    };
    const add_data = () => {
      data.push({
        nama: name2,
        Username: username2,
        password: password2,
        confirm: cfrmpassword,
      });
      setData(data);
      save_data_in_AsynStorage(data);
      get_data();
    };
    const save_data_in_AsynStorage = async data => {
      try {
        await AsyncStorage.setItem('database', JSON.stringify(data));
      } catch (error) {
        console.log('save data', error);
      }
    };
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
    formkosong();
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'grey',
          paddingVertical: 13,
          paddingHorizontal: 20,
          backgroundColor: '#BAC8A6',
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('login');
          }}>
          <View style={{paddingHorizontal: 10}}>
            <Icon2 name="chevron-left" size={20} color={'black'} />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 19,
            marginLeft: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Back To login
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Image
            source={require('../../assets/icon/stamped.png')}
            style={{width: 100, height: 100}}
          />
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontFamily: 'Courgette-Regular',
                marginTop: 10,
              }}>
              Register,
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 10,
                fontStyle: 'italic',
              }}>
              Your Personal Data As a Personal Account
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#19A1A9',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingHorizontal: 20,
            height: '75%',
            paddingTop: 20,
          }}>
          <Inputan
            text="Name"
            style={{
              marginBottom: 5,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: 1,
            }}
            placeholder="Input your Name"
            Icon="adduser"
            style2={{width: '80%', marginLeft: 10}}
            onChangeText={val => setCek_nama(val)}
          />
          <Inputan
            text="Username"
            style={{
              marginBottom: 5,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: 1,
            }}
            placeholder="Input your Username"
            Icon2="user-check"
            stylecontainer={{marginTop: 20}}
            style2={{width: '80%', marginLeft: 10}}
            onChangeText={val => setCek_username(val)}
          />
          <Inputan
            text="Password"
            style={{
              marginBottom: 5,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: 1,
            }}
            placeholder="Input your Password"
            Icon2="user-lock"
            stylecontainer={{marginTop: 20}}
            Icon3="eye"
            style2={{width: '80%', marginLeft: 10}}
            secureTextEntry={kondisi}
            onPress={() => {
              setKondisi(!kondisi);
            }}
            onChangeText={val => setCek_password(val)}
          />
          <Inputan
            text="Confirm Password"
            style={{
              marginBottom: 5,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: 1,
            }}
            placeholder="Confirm Your Password"
            Icon2="check"
            stylecontainer={{marginTop: 20}}
            Icon3="eye"
            style2={{width: '80%', marginLeft: 14.5}}
            secureTextEntry={kondisi2}
            onPress={() => {
              setKondisi2(!kondisi2);
            }}
            onChangeText={val => setConfirmpassword(val)}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                setRegister(true);
                setTimeout(() => {
                  cekForm();
                  setRegister(false);
                }, 1500);
              }}>
              <View
                style={{
                  backgroundColor: '#E1C32D',
                  height: 45,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 250,
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: 'black',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-BoldItalic',
                    fontSize: 18,
                  }}>
                  {register ? (
                    <ActivityIndicator size={'large'} color="white" />
                  ) : (
                    'Sign Up'
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Part Modal success register*/}
        <Modal_for_success_register
          isVisible={modal}
          onPress={() => {
            setModal(false);
            navigation.navigate('login');
          }}
        />
        {/* part modal form kosong */}
        <Modal_empty_form
          isVisible={modalformkosong}
          onPress={() => {
            setModalformkosong(false);
          }}
        />
        {/* part modal for wrong letter */}
        <Modal_for_wrong_letter
          isVisible={modalwrongletter}
          text={textmodalletter}
          onPress={() => {
            setModalwrongletter(false);
          }}
        />
        {/* part modal for confirm password */}
        <Modal_for_confirm_password
          isVisible={modalconfirmpw}
          onPress={() => {
            setModalconfirmpw(false);
          }}
        />
      </View>
    </ScrollView>
  );
}

function Inputan(props) {
  return (
    <View style={props.stylecontainer}>
      <Text style={props.style}>{props.text}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          borderWidth: 1,
          paddingLeft: 10,
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <Icon name={props.Icon} size={30} />
        <Icon2 name={props.Icon2} size={23} />
        <TextInput
          ref={props.Ref}
          onEndEditing={props.onEndEditing}
          style={props.style2}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity onPress={props.onPress}>
          <Icon name={props.Icon3} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Register;
const styles = StyleSheet.create({});
