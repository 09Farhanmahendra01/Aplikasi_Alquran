import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { Usercontext } from '../../router'
function Register({ navigation }) {
    const { user_email, user_password } = useContext(Usercontext);
    const [email, setEmail] = user_email;
    const [password, setPassword] = user_password;

    return (
        <View style={{}}>

            <TextInput style={{ borderWidth: 2 }} onChangeText={(val) => setEmail(val)} />
            <TouchableOpacity style={{ backgroundColor: 'black', alignItems: 'center', padding: 20, }} onPress={() => navigation.navigate('tes')}>
                <Text style={{ color: 'white' }}>enter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register;
const styles = StyleSheet.create({})