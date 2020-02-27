import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from "..";


export class HomeScreenDetail extends Component{
    render() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Home Detail" navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Detail!</Text>
            </View>
        </SafeAreaView>
    );
    }
}