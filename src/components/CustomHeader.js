import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import {IMAGE} from "../constants/image";

export class CustomHeader extends Component{
    render() {
            let {navigation, isHome, title} = this.props
            return (
        <View style={{flexDirection: 'row', height: 80,  backgroundColor: 'white'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {
                    isHome ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image style={{width: 30, height: 30, marginLeft: 5}}
                                   source={IMAGE.ICON_MENU}
                                   resizeMode="contain"/>
                        </TouchableOpacity> :
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                                          onPress={() => navigation.goBack()}
                        >

                            <Image style={{width: 20, height: 20, marginLeft: 5}}
                                   source={IMAGE.ICON_BACK}
                                   resizeMode="contain"
                            />
                            <Text>Back</Text>
                        </TouchableOpacity>
                }
            </View>

            <View style={{flex: 1.5, justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Insight')}>
               {/* <Text style={{textAlign: 'center', fontSize: 20}}>BAHR</Text>*/}
               <Image style={{width: 170, height: 20,}}
                   source={IMAGE.BAHR_LOGO_BLACK} resizeMode="contain"/>
                    </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TouchableOpacity>
                <Image style={{width: 50, height: 30, marginLeft: 50}}
                    source={IMAGE.ICON_SEARCH} resizeMode="contain" />
                    </TouchableOpacity>
            </View>
        </View>
    )
    }

}