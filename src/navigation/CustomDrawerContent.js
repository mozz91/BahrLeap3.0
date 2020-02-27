import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {IMAGE} from "../constants/image";

export class CustomDrawerContent extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
                <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={IMAGE.BAHR_LOGO} style={{height: 80, width: 200}}/>

                </View>
                <ScrollView style={{marginLeft: 5}}>
                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('Insight')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>BAHR Insight</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('AssetManagment')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>Asset Managment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('Seminars')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>Seminars</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('Publications')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>Publications</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('BAHRCasts')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>BAHRcasts and Videos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('Services')}
                    >
                        <Text style={{color: 'rgb(231, 81, 30)'}}>Services</Text>
                    </TouchableOpacity>

{/*                    <TouchableOpacity
                        style={{marginTop: 20}}
                        onPress={() => this.props.navigation.navigate('Notifications')}
                    >
                        <Text style={{color: 'white'}}>Notifications</Text>
                    </TouchableOpacity>*/}

                </ScrollView>

                <TouchableOpacity
                        style={{marginTop: 20, marginLeft: 5, marginBottom: 0}}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{color: 'white'}}>BAHR ACCESS</Text>
                    </TouchableOpacity>

                <TouchableOpacity
                        style={{marginTop: 20, marginLeft: 5, marginBottom: 20}}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{color: 'white'}}>Log Out</Text>
                    </TouchableOpacity>

            </SafeAreaView>
        )
    }

}