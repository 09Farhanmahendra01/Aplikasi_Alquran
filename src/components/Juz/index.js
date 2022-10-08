import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Quran from '../../database'
export default class Juz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nilai: '',
        }
    }

    rules = (No) => {
        if (this.state.nilai == '') {
            this.setState({ nilai: No });
        } else if (this.state.nilai == No) {
            this.setState({ nilai: '' });
        } else if (this.state.nilai != No) {
            this.setState({ nilai: No })
        }
    }

    render() {
        return (
            <View>
                <Text>JUz</Text>
            </View>
            // <ScrollView>
            //     <View style={{ padding: 30 }}>
            //         <TouchableOpacity onPress={() => {
            //             this.rules('1');
            //         }}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 1</Text>
            //             </View>
            //             {
            //                 hasil = Quran.filter((item) => {
            //                     return item
            //                 })


            //             }
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={() => { this.rules('2') }}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 2</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 3</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 4</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 5</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 6</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 7</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 8</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 9</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={this.props.onPress}>
            //             <View style={{ backgroundColor: 'blue', height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 20 }}>
            //                 <Text style={{ color: 'white' }}>Juz 10</Text>
            //             </View>
            //         </TouchableOpacity>
            //     </View>
            // </ScrollView >
        )
    }
}





