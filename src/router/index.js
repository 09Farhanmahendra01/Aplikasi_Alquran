import {Text, StyleSheet, View} from 'react-native';
import React, {createContext, useState} from 'react';
import Splash from '../screen/splash/index';
import Login from '../screen/login';
import Home from '../screen/home/index';
import Bacaquran from '../components/home/bacaquran';
import Register from '../screen/register';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PerSurah from '../components/perSurah';
import Kumpulan_juz from '../components/Kumpulan_Juz';
import Lanjut_Juz from '../components/lanjutJuz';
const Stack = createNativeStackNavigator();
export const Usercontext = createContext();

function Navigation() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  return (
    <Usercontext.Provider
      value={{
        // data Register
        name_user: [name, setName],
        username_user: [username, setUsername],
        password_user: [password, setPassword],
        data_asyncStorage: [data, setData],
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Bacaquran}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="persurah"
          component={PerSurah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="kumpulanjuz"
          component={Kumpulan_juz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="lanjutjuz"
          component={Lanjut_Juz}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </Usercontext.Provider>
  );
}

export default Navigation;
