import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from "..";


export class BAHRcastsScreen extends Component{
    render() {
        return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="BAHR" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>BAHRcasts and videos screen</Text>
            </View>
        </SafeAreaView>
    );

    }
}

export default BAHRcastsScreen;