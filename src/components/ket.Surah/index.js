import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import DataQuran from '../../database/index'

export default class Ketsurah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nilai: '',
        }
    }


    rules = (nomor) => {
        if (this.state.nilai === '') {
            return this.setState({ nilai: nomor })
        } else if (this.state.nilai == nomor) {
            return this.setState({ nilai: '' });
        } else if (this.state.nilai != nomor) {
            this.setState({ nilai: nomor })
        }
    }
    render() {
        return (
            <ScrollView>
                {DataQuran.map((value, index) => {
                    return (
                        <>
                            {
                                value.type == 'mekah' ? (<View style={{
                                    height: 60, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, backgroundColor: '#abb1cf'
                                }} key={index}>
                                    <TouchableOpacity onPress={() => this.rules(value.nomor)
                                    } style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ borderWidth: 2, padding: 5, alignItems: 'center', borderRadius: 8, backgroundColor: 'gray' }}>
                                                    <Text style={{ color: 'white', fontSize: 17 }}>{value.nomor}</Text>
                                                </View>
                                                <View style={{ alignItems: 'flex-start', }}>
                                                    <Text style={{ color: 'black', fontSize: 17, marginLeft: 15 }}>{value.nama}</Text>
                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                                        <Text style={{ color: 'brown' }}>{value.type} </Text>
                                                        <Text style={{ color: 'brown' }}>| {value.ayat} Ayat</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={{ color: 'black', fontSize: 19 }}>{value.asma}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>) : (<View style={{ height: 60, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }} key={index}>
                                    <TouchableOpacity onPress={() => this.rules(value.nomor)} style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ borderWidth: 2, padding: 5, alignItems: 'center', borderRadius: 8, backgroundColor: 'gray' }}>
                                                    <Text style={{ color: 'white', fontSize: 17 }}>{value.nomor}</Text>
                                                </View>
                                                <View style={{ alignItems: 'flex-start', }}>
                                                    <Text style={{ color: 'black', fontSize: 17, marginLeft: 15 }}>{value.nama}</Text>
                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                                        <Text style={{ color: 'brown' }}>{value.type} </Text>
                                                        <Text style={{ color: 'brown' }}>| {value.ayat} Ayat</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={{ color: 'black', fontSize: 19 }}>{value.asma}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>)
                            }
                            {

                                this.state.nilai == value.nomor ? (<View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>
                                    <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'column' }}>
                                        <Text style={{ color: 'brown', fontStyle: 'italic', fontWeight: 'bold', fontSize: 18 }}>Surah {value.nama}</Text>
                                        <Text style={{ color: 'brown', fontStyle: 'italic', fontWeight: 'bold', fontSize: 18 }}>{value.asma}</Text>
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 20 }}>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Arti Surah :</Text>
                                            <Text style={{ color: 'blue', fontStyle: 'italic' }}> {value.arti}.</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Jenis Surah :</Text>
                                            <Text style={{ color: 'blue', fontStyle: 'italic' }}> {value.type}.</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Jumlah Ayat :</Text>
                                            <Text style={{ color: 'blue', fontStyle: 'italic' }}> {value.ayat} Ayat.</Text>
                                        </View>
                                        <View style={{ alignContent: 'flex-start' }}>
                                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Keterangan Surah :</Text>
                                            <Text style={{ color: 'blue', fontStyle: 'italic' }}>{value.keterangan}</Text>
                                        </View>
                                    </View>
                                </View>) : (<View></View>)
                            }
                        </>

                    )
                })
                }
            </ScrollView >
        )
    }
}

