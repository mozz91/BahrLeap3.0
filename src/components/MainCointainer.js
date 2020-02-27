import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from "../navigation/TabNavigator";

import MainHeader from "./MainHeader";


class MainContainer extends Component{
    constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

    async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
     render() {

         if (!this.state.isReady) {
      return <AppLoading />;
    }
         return (
             <Container>
                <React.Fragment>
                    <MainHeader />
                    <TabNavigator />
                </React.Fragment>
                 </Container>
            );
    }
}
