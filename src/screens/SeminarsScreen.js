import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from "..";


export class SeminarsScreen extends Component{
    render() {
        return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="BAHR" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Seminars</Text>
            </View>
        </SafeAreaView>
    );

    }
}