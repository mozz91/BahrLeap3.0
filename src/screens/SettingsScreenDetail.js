import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from "..";


export class SettingsScreenDetail extends Component{
    render() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Setting Detail" navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings details!</Text>
            </View>
        </SafeAreaView>
    );
    }
}