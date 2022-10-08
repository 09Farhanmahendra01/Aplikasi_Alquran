import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { Component, useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Entypo';
import Modal from "react-native-modal";
import { Usercontext } from '../../router';

function Inputan(props) {

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'grey', fontFamily: 'Poppins-BoldItalic' }}>{props.text}</Text>
            <View style={props.style}>
                <TextInput secureTextEntry={props.scr} style={props.style2} onChangeText={props.onChangeText} />
                <TouchableOpacity onPress={props.onPress} >
                    <View style={{ zIndex: 2 }}>
                        <Icon name={props.icon} size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default function Login({ navigation }) {
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [kondisi, setKondisi] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailUser, setEmailUser] = useState('farhan');
    const [passwordUser, setPasswordUser] = useState('123');

    function rulesSignIn() {
        if (email == emailUser && password == passwordUser) {
            navigation.navigate('home');
        } else {
            setModal(true)
        }
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/image/quran.png')} style={{ width: 100, height: 100 }} />
                <Text style={{ fontFamily: 'Poppins-Bold', color: 'black', marginTop: 30, fontSize: 20 }}>Log in to your Account</Text>
                <Text style={{ fontSize: 15 }}>Welcome back, please enter your details.</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <Inputan text='Username' onChangeText={(val) => setEmail(val)} style2={{ borderWidth: 1, borderRadius: 10 }} />
                <Inputan text='Password' scr={kondisi} img={require('../../assets/icon/mata.png')} icon='eye' onPress={() => setKondisi(!kondisi)} onChangeText={(item) => setPassword(item)} style={{ borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }} style2={{ width: '90%' }} />
                <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: 'black', marginTop: 25 }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 50, }}>
                <TouchableOpacity onPress={() => {
                    setLogin(true)
                    setTimeout(() => {
                        rulesSignIn();
                        setLogin(false)
                    }, 1700)
                }}>
                    <View style={{ backgroundColor: '#03AC0E', width: 200, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-BoldItalic', color: 'white' }}>{login ? (<ActivityIndicator size={'large'} color='white' />) : 'Login'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('register')
                }}>
                    <View style={{ backgroundColor: 'white', width: 100, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 2, marginLeft: 20 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-BoldItalic', color: 'black' }}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal isVisible={modal} style={{ justifyContent: 'center', flex: 1, alignItems: 'center', zIndex: 2 }}>
                <View style={{ flex: 1 }}>
                    <Text>I am the modal content!</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModal(false)
                }}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}




const styles = StyleSheet.create({})


