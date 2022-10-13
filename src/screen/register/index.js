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
import React, {useContext, useState} from 'react';
import {Usercontext} from '../../router';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';

function Register({navigation}) {
  const [register, setRegister] = useState(false);
  const [kondisi, setKondisi] = useState(true);
  const [kondisi2, setKondisi2] = useState(true);
  const [confirmpassword, setConfirmpassword] = useState('');
  // Cek Form
  const [cek_nama, setCek_nama] = useState('');
  const [cek_username, setCek_username] = useState('');
  const [cek_password, setCek_password] = useState('');
  // Variable Global
  const {name_user, username_user, password_user} = useContext(Usercontext);
  const [name, setName] = name_user;
  const [username, setUsername] = username_user;
  const [password, setPassword] = password_user;
  // Function
  const cekForm = () => {
    let name2 = String(cek_nama);
    let username2 = String(cek_username);
    let password2 = String(cek_password);
    let cfrmpassword = String(confirmpassword);
    let pemeriksaan1 = null;
    let pemeriksaan2 = null;
    const formkosong = () => {
      if (
        name2 == '' ||
        username2 == '' ||
        password2 == '' ||
        cfrmpassword == ''
      ) {
        alert('Harap isi Semua Form...!!!');
      } else {
        Jumlah_kata();
      }
    };
    const Jumlah_kata = () => {
      if (name2.length < 5) {
        alert('Buatlah Nama lebih dari 4 huruf..!!!');
      } else if (username2.length < 3) {
        alert('Buatlah Username lebih dari 4 huruf..!!!');
      } else if (password2.length < 6) {
        alert('Buatlah Password lebih dari 4 huruf..!!!');
      } else {
        confirmPW();
      }
    };
    const confirmPW = () => {
      if (cfrmpassword != password2) {
        alert('Harap Samakan antara Password dengan confirm password..!!!');
      } else {
        setName(name2);
        setUsername(username2);
        setPassword(password2);
        navigation.navigate('login');
      }
    };
    formkosong();
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 20,
          marginTop: 30,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/icon/stamped.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
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
        <Inputan
          text="Name"
          style={{marginBottom: 5, fontStyle: 'italic', fontWeight: 'bold'}}
          placeholder="Input your Name"
          Icon="adduser"
          style2={{width: '80%', marginLeft: 10}}
          onChangeText={val => setCek_nama(val)}
        />
        <Inputan
          text="Username"
          style={{marginBottom: 5, fontStyle: 'italic', fontWeight: 'bold'}}
          placeholder="Input your Username"
          Icon2="user-check"
          stylecontainer={{marginTop: 20}}
          style2={{width: '80%', marginLeft: 10}}
          onChangeText={val => setCek_username(val)}
        />
        <Inputan
          text="Password"
          style={{marginBottom: 5, fontStyle: 'italic', fontWeight: 'bold'}}
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
          style={{marginBottom: 5, fontStyle: 'italic', fontWeight: 'bold'}}
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
                backgroundColor: '#2992EE',
                height: 45,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                width: 250,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'blue',
              }}>
              <Text
                style={{
                  color: 'white',
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
        }}>
        <Icon name={props.Icon} size={30} />
        <Icon2 name={props.Icon2} size={23} />
        <TextInput
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
