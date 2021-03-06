import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from "native-base";
import { IMAGE } from '../constants/image';

export class LoginScreen extends Component{
    render() {
return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={IMAGE.BAHR_LOGO_BLACK} style={{width: 150, height: 20,}} />
                <TouchableOpacity
                    style={{marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('Insight')}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                                <TouchableOpacity
                    style={{marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    }
}