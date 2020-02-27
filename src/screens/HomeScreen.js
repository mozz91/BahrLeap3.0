import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CustomHeader} from "..";
import TabNavigator from '../../App'


export class HomeScreen extends Component{
    render() {
            return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="BAHR" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
 {/*               <TouchableOpacity
                    style={{marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('AssetManagment')}
                >
                    <Text>Go Home Detail</Text>
                </TouchableOpacity>*/}
            </View>
        </SafeAreaView>

    );
    }
}